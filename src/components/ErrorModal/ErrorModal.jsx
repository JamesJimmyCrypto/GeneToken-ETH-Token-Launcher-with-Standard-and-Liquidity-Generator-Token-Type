import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";

const ErrorModal = ({ show, setShow }) => {
  return (
    <Dialog modal open={show} onOpenChange={setShow}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Error</h3>
        </div>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="relative col-span-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src="/assets/images/icons/error.gif"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h4 className="text-base font-bold">Ops! Something went wrong</h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              rem?
            </p>
          </div>
          <div className="relative col-span-12">
            <div className="flex items-center justify-end gap-2">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;
