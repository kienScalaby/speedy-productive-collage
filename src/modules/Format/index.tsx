import Canvas from "@/components/Canvas/Canvas";
import { useCanvasConfigData, useImageData } from "@/hooks/useReduxData";
import JSZip from "jszip";
import { BsDownload } from "react-icons/bs";

const ModuleFormat = () => {
  const { images } = useImageData();
  const { activeTemplates } = useCanvasConfigData();

  const handleDownload = async (formatIndex: number) => {
    const zip = new JSZip(); // Create a new ZIP instance
    const imageFolder = zip.folder(`format-${formatIndex}`); // Create a folder inside the zip

    // Iterate through all image groups
    images.forEach((_, groupIndex) => {
      const originalCanvas = document.querySelector(
        `canvas[data-group="${groupIndex}"][data-format="${formatIndex}"]`
      ) as HTMLCanvasElement | null;

      if (originalCanvas) {
        // Get the device pixel ratio (DPR)
        const dpr = window.devicePixelRatio || 1;

        // Create an offscreen canvas for resizing
        const resizedCanvas = document.createElement("canvas");
        const ctx = resizedCanvas.getContext("2d");

        // Set the new size to 800x800 with the DPR taken into account
        const targetWidth = 250;
        const targetHeight = 250;
        resizedCanvas.width = targetWidth * dpr;
        resizedCanvas.height = targetHeight * dpr;
        resizedCanvas.style.width = `${targetWidth}px`;
        resizedCanvas.style.height = `${targetHeight}px`;

        if (ctx) {
          // Scale the context to compensate for the high DPR and avoid blurriness
          ctx.scale(dpr, dpr);

          // Draw the original canvas content onto the resized canvas with sharp scaling
          ctx.drawImage(originalCanvas, 0, 0, targetWidth, targetHeight);

          // Convert the resized canvas to a data URL
          const dataUrl = resizedCanvas.toDataURL("image/png");
          const base64Data = dataUrl.split(",")[1]; // Extract base64 part of the URL

          // Add the resized image to the zip (using base64 data)
          imageFolder?.file(`canvas-${groupIndex}.png`, base64Data!, {
            base64: true,
          });
        }
      }
    });

    // Generate the ZIP file and download it
    const zipContent = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipContent);
    link.download = `format-${formatIndex}-images.zip`;
    link.click();
  };

  return (
    <section className="flex flex-col">
      {images?.map((_, indexGroup) => (
        <div
          key={indexGroup}
          className="sticky top-0 z-40 flex w-full overflow-hidden"
        >
          {activeTemplates?.map((_, index) => (
            <div key={index} className="w-full">
              {indexGroup === 0 && (
                <div className="flex h-[60px] items-center justify-center gap-3 bg-gray-700 text-center text-sm font-semibold text-white">
                  Format {index + 1}
                  <button onClick={() => handleDownload(index)}>
                    <BsDownload className="-ml-2 mr-4 h-4 w-4 text-[#7198e8]" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="border-r">
        {images?.map((group, indexGroup) => (
          <div key={indexGroup} className="flex">
            {activeTemplates?.map((_, index) => (
              <div key={index} className="flex flex-col">
                <Canvas
                  group={group}
                  groupIndex={indexGroup}
                  templateIndex={index}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModuleFormat;
