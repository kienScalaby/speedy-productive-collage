import { COLLAGE_TEMPLATES_4_SQUARE } from "@/constants/canvasConfig";

// From https://tailwindui.com/components/application-ui/overlays/modals
export const Modal = ({
  closeModal,
  onSubmit,
  handleSelectFormat,
  formatSelected,
}: {
  closeModal: () => void;
  onSubmit: () => void;
  handleSelectFormat: (index: number) => void;
  formatSelected: number[];
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ">
      <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center backdrop-blur-sm backdrop-filter sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={() => closeModal()}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-25" />
        </div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block min-w-[900px] transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:align-middle">
          <div className="flex flex-row items-center justify-between p-4">
            <h3 className="w-full truncate border-b pb-2 text-xl font-semibold uppercase text-gray-900">
              Choose Format
            </h3>
          </div>
          <div className="flex flex-wrap gap-5 p-4">
            {COLLAGE_TEMPLATES_4_SQUARE?.map((item, index) => (
              <>
                {item?.default ? (
                  <div className="aspect-square w-[200px] rounded-xl border-[2px] border-gray-500 bg-gray-200 p-3 text-black">
                    {item?.name}
                  </div>
                ) : (
                  <div
                    className="aspect-square w-[200px] cursor-pointer rounded-xl border-2 border-gray-200 p-3 text-black"
                    onClick={() => handleSelectFormat(index)}
                    style={{
                      border: formatSelected?.includes(index)
                        ? "2px solid blue"
                        : "",
                    }}
                  >
                    {item?.name}
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
