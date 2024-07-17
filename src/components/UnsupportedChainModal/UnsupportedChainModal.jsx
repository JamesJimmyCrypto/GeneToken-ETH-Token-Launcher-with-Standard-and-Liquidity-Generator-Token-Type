import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";
import { ArrowRight, QuestionMark } from "iconoir-react";

const UnsupportedChainModal = ({ show, setShow }) => {
  return (
    <Dialog modal open={show} onOpenChange={setShow}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Unsupported Chain</h3>
        </div>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="relative col-span-12 text-center">
            <div className="w-72 mx-auto mb-4">
              <img
                src="/assets/images/icons/unsupported_chain.svg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h4 className="text-base font-bold">This chain is unsupported</h4>
            <p className="text-xs">
              Your connected chain is currently not supported. Please switch
              networks to continue.
            </p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-5 h-5 border rounded-full flex items-center justify-center">
                <QuestionMark width={14} strokeWidth={3} />
              </div>
              <div className="w-5 h-5 flex items-center justify-center">
                <ArrowRight width={12} strokeWidth={3} />
              </div>
              <div className="w-5 h-5 flex items-center justify-center">
                <img
                  src="https://tokens.pancakeswap.finance/images/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12">
            <div className="flex items-center justify-end gap-2">
              <button type="button" className="btn btn-primary w-full">
                Switch Network
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnsupportedChainModal;
