import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";

const LoadingModal = ({ show, setShow }) => {
  return (
    <Dialog modal open={show}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Confirm</h3>
        </div>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="relative col-span-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src="/assets/images/icons/clock.gif"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h4 className="text-base font-bold">Waiting for confirmation</h4>
            <p className="text-xs">
              Wait While Your Transaction In Under Processing !!!! 
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
