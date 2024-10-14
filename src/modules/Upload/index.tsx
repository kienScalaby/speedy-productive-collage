"use client";

import Upload from "@/components/Upload";
import { useImageData } from "@/hooks/useReduxData";
import { useState } from "react";
import ImgsViewer from "react-images-viewer";

const ModuleUpload = () => {
  const { images } = useImageData();
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const onPreview = (id: string) => {
    const arr = images.flat();
    const index = arr.findIndex((item) => item.id === id);
    setCurrImg(index);
    setIsOpen(true);
  };

  return (
    <section className="w-full">
      <h3 className="text-md sticky top-0 z-[99999] flex h-[60px] items-center justify-center rounded-tl-xl border-r border-gray-600 bg-gray-700 font-semibold text-white">
        Upload Image
      </h3>
      <div className="border">
        {images?.map((group, ind) => (
          <div
            key={ind}
            className="grid w-full grid-cols-2 gap-3 border-b bg-white p-3 py-3"
          >
            {group?.map((item, index) => (
              <div key={index} className="col-span-1">
                <Upload
                  onPreview={() => onPreview(item?.id)}
                  id={item?.id}
                  file={item?.file}
                />
              </div>
            ))}
          </div>
        ))}
        <ImgsViewer
          imgs={images
            .flat()
            ?.filter((item) => item?.file)
            ?.map((item) => ({
              src: item?.file,
            }))}
          currImg={currImg}
          showThumbnails={true}
          isOpen={isOpen}
          onClickPrev={() => setCurrImg(currImg - 1)}
          onClickNext={() => setCurrImg(currImg + 1)}
          onClickThumbnail={(index: number) => setCurrImg(index)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </section>
  );
};

export default ModuleUpload;
