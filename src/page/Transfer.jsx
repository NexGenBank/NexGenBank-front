import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Transfer = () => {
  const [transferForm, setTransferForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="m-80 mt-10 open-sans-basic">
        {transferForm ? (
          <div>
            <form className="flex flex-col shadow-lg rounded-lg w-96 p-10">
              <span>Account holder name</span>
              <input
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-zinc-300 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none  w-full rounded-md sm:text-sm"
                type="text"
                name="name"
                id=""
                placeholder="Account holder name"
              />
              <span>Account number</span>
              <input
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-zinc-300 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none  w-full rounded-md sm:text-sm"
                type="text"
                name="number"
                id=""
                placeholder="Account number"
              />
              <span>Amount to transfer</span>
              <input
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-zinc-300 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none  w-full rounded-md sm:text-sm"
                type="text"
                name="Amountr"
                id=""
                placeholder="Amount"
              />
              <button
                type="submit"
                className="bg-blue-900 w-fit h-fit text-zinc-50 px-6 py-2 flex justify-center rounded-xl mx-auto mt-3"
              >
                Transfer
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="bg-zinc-300 rounded-t-lg px-5 py-2 flex justify-between items-center">
              <p className="font-semibold text-lg text-zinc-900">
                Transfer history
              </p>
              <button
                className="bg-blue-900 w-fit h-fit text-zinc-50 px-6 py-2 flex justify-center rounded-xl"
                onClick={() => setTransferForm(true)}
              >
                Make a transfer
              </button>
            </div>
            <div className="effect w-full border-t-0 rounded-t-none rounded-lg min-h-60"></div>
          </div>
        )}
      </div>
    </>
  );
};
