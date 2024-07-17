import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";
import { Switch } from "@/ui/shadcn/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";
import { InfoCircle } from "iconoir-react";
import { useEffect, useState } from "react";

const SwapSettingModal = ({ show, setShow,slippage,setSlippage,transactionDeadline,setTransactionDeadline }) => {
  const [testTo, setTestTo] = useState(false);
  const [autoSlippage, setAutoSlippage] = useState(false);
  // const [slippage, setSlippage] = useState(0.1);
  // const [transactionDeadline, setTransactionDeadline] = useState(10);
  
  return (
    <Dialog modal open={show} onOpenChange={setShow}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Settings</h3>
        </div>
        <div className="relative grid grid-cols-12 gap-4">
          <div className="relative col-span-12">
            <div className="relative p-4 bg-gray-850">
              <h6 className="text-base mb-2 font-semibold">
                Automatic Slippage Tolerance
              </h6>
              <div className="flex items-center justify-between gap-5">
                <p className="text-xs text-gray-400">
                  Turn off automatic slippage tolerance to adjust the value
                </p>
                <Switch checked={autoSlippage} onCheckedChange={setAutoSlippage} />
              </div>
            </div>
          </div>
          <div className="relative col-span-12">
            <div className="relative p-4 bg-gray-850">
              <h6 className="text-base mb-2 font-semibold inline-flex items-center gap-x-1">
                Slippage{" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoCircle width={16} height={16} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xxs leading-normal text-center">
                        Difference between expected and actual trade values due
                        to asset volatility. Exceeding the user-defined range
                        reverses the transaction.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h6>
              <div className="flex items-center gap-2 p-1 border border-gray-550">
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    slippage === 0.1 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setSlippage(0.1)}
                >
                  0.1%
                </button>
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    slippage === 0.5 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setSlippage(0.5)}
                >
                  0.5%
                </button>
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    slippage === 1 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setSlippage(1)}
                >
                  1%
                </button>
                <div className="flex items-center flex-auto max-w-52 max-w-54 border border-gray-550 pe-3">
                  <input
                    type="text"
                    value={slippage}
                    disabled={autoSlippage}
                    className="w-full py-1.5 px-3 outline-none bg-transparent text-end text-xs"
                    onChange={(e)=>{setSlippage(e.target.value)}}
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-12">
            <div className="relative p-4 bg-gray-850">
              <h6 className="text-base mb-2 font-semibold inline-flex items-center gap-x-1">
                Transaction Deadline (min){" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoCircle width={16} height={16} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xxs leading-normal text-center">
                        Time limit for confirmation; otherwise, the transaction
                        is reverted.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h6>
              <div className="flex items-center gap-2 p-1 border border-gray-550">
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    transactionDeadline === 10 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setTransactionDeadline(10)}
                >
                  10
                </button>
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    transactionDeadline === 20 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setTransactionDeadline(20)}
                >
                  20
                </button>
                <button
                  type="button"
                  className={`inline-block py-1.5 px-3 flex-1 text-xs ${
                    transactionDeadline === 30 ? "bg-gray-550" : ""
                  }`}
                  onClick={() => setTransactionDeadline(30)}
                >
                  30
                </button>
                <div className="flex items-center flex-auto max-w-52 border border-gray-550">
                  <input
                    type="number"
                    value={transactionDeadline}
                    className="w-full py-1.5 px-3 outline-none bg-transparent text-end text-xs"
                    onChange={(e)=>setTransactionDeadline(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative col-span-12">
            <div className="relative p-4 bg-gray-850">
              <h6 className="text-base mb-2 font-semibold">
                Approve Unlimited Amount
              </h6>
              <div className="flex items-center justify-between gap-5">
                <p className="text-xs text-gray-400">
                  Turn on approval for unlimited spending for all tokens
                </p>
                <Switch checked={testTo} onCheckedChange={setTestTo} />
              </div>
            </div>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SwapSettingModal;
