import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";

const ConfirmModal = ({ show, setShow }) => {
  return (
    <Dialog modal open={show} onOpenChange={setShow}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Confirm Supply</h3>
        </div>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="relative col-span-12">
            <div>
              BNB : <span className="font-bold">0.00000</span>
            </div>
            <div>
              CAKE : <span className="font-bold">0.0026</span>
            </div>
            <div>
              Output is estimated. You will receive at least :{" "}
              <span className="font-bold">0.0026</span>
            </div>
            <div>CAKE or the transaction will revert.</div>
          </div>
          <div className="relative col-span-12">
            <div className="flex items-center justify-end gap-2">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
