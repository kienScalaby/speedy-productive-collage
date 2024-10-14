"use client";

import { CANVAS_SIZE } from "@/components/Canvas/Canvas";
import Modal from "@/components/Modal";
import { COLLAGE_TEMPLATES_4_SQUARE } from "@/constants/canvasConfig";
import { useTemplateAction, useUploadImage } from "@/hooks/useReduxAction";
import { useCanvasConfigData } from "@/hooks/useReduxData";
import ModuleFormat from "@/modules/Format";
import ModuleUpload from "@/modules/Upload";
import { generateUUID } from "@/utils/generateId";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { NextPageWithLayout } from "./_app";
import { CgAdd } from "react-icons/cg";

const Page: NextPageWithLayout = () => {
  const [open, setOpen] = useState(false);
  const { newGroupImage } = useUploadImage();
  const { activeTemplates } = useCanvasConfigData();
  const { addTemplate } = useTemplateAction();
  const [formatSelected, setFormatSelected] = useState<number[]>([]);

  const handleAddFormat = () => {
    if (activeTemplates?.length === COLLAGE_TEMPLATES_4_SQUARE?.length) {
      toast.error("Maximum Template");
      return;
    }
    toast.success("Added Successfully");
    addTemplate(formatSelected);
    setOpen(false);
    setFormatSelected([]);
  };

  const handleSelectFormat = (index: number) => {
    let arr = [];
    if (formatSelected?.includes(index)) {
      arr = formatSelected?.filter((item) => item !== index);
    } else {
      arr = [...formatSelected, index];
    }
    setFormatSelected(arr);
  };

  const handleShowFormat = () => {
    setOpen(true);
  };

  const handleAddGroup = () => {
    const newGroup = Array.from({ length: 4 }, () => ({ id: generateUUID() }));
    newGroupImage({ group: newGroup });
    toast.success("Added Successfully");
  };

  useEffect(() => {
    setFormatSelected(activeTemplates);
  }, [activeTemplates]);
  return (
    <>
      <Toaster />
      <div className="flex min-h-screen w-screen flex-col items-center justify-start overflow-x-auto bg-white md:p-4 md:pl-24">
        <h1 className="mb-4 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text p-3 text-5xl font-semibold text-transparent md:mb-[40px]">
          Fast Collage Tool
        </h1>
        <div className="relative flex w-auto flex-col max-h-[800px] max-w-[90vw] md:min-w-auto min-w-[700px] overflow-x-auto">
          <div className="relative flex h-full w-auto justify-start overflow-auto rounded-t-2xl">
            <aside
              style={{
                minWidth: CANVAS_SIZE?.width + 100,
              }}
              className="sticky left-0 z-50 bg-white"
            >
              <ModuleUpload />
            </aside>
            <main>
              <ModuleFormat />
            </main>
            <button
              className="sticky right-0 top-0 z-40 flex w-[45px] items-center justify-center rounded-none bg-[#4081e8] p-3"
              onClick={handleShowFormat}
            >
              <CgAdd className="h-6 w-6 text-white" />
            </button>
          </div>
          <button
            className="z-50 flex h-[45px] w-full justify-center rounded-b-xl bg-[#4081e8] p-3"
            onClick={handleAddGroup}
          >
            <CgAdd className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      {open && (
        <Modal
          closeModal={() => setOpen(false)}
          onSubmit={handleAddFormat}
          formatSelected={formatSelected}
          handleSelectFormat={handleSelectFormat}
        />
      )}
    </>
  );
};

// get nested-layout
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   );
// };

export default Page;
