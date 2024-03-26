import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState([]);
  const [expense, setExpense] = useState([]);
  const [saving, setSaving] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getBalanceData() {
      const response = await axios.get(`${apiUrl}/1`);
      setBalance(response.data.price);
    }
    getBalanceData();
    async function getExpenseData() {
      const response = await axios.get(`${apiUrl}/2`);
      setExpense(response.data.price);
    }
    getExpenseData();
    async function getSavingData() {
      const response = await axios.get(`${apiUrl}/3`);
      setSaving(response.data.price);
    }
    getSavingData();
  }),
    [];

  return (
    <>
      <div className="text-2xl open-sans-basic">Overview</div>
      <div className="flex w-full h-96 justify-between gap-5 items-start pb-5">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="bg-zinc-100 rounded-t-xl font-semibold w-fit px-6 pt-2 text-sm open-sans-basic">
              Balance
            </div>
            <div className="bg-zinc-100 rounded-3xl rounded-tl-none p-4 h-40 flex flex-col flex-nowrap justify-start w-full">
              <div className="flex flex-col h-full justify-between">
                <div className="min-w-[150px] max-w-[250px] font-normal text-4xl p-2">
                  ${balance}
                </div>
                <div className="flex flex-nowrap gap-3 mt-2">
                  <div className="bg-zinc-500 w-36 h-fit text-zinc-50 text-base py-2 flex justify-center rounded-2xl">
                    Credit
                  </div>
                  <div className="bg-zinc-300 w-36 h-fit text-zinc-900 py-2 flex justify-center rounded-2xl">
                    Withdraw
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 rounded-3xl px-4 py-4 h-40 flex flex-col justify-start w-full">
            <div className="flex flex-col h-full justify-between">
              <div className="min-w-[150px] max-w-[250px] font-normal text-4xl p-2">
                ${balance}
              </div>
              <div className="flex flex-nowrap gap-3 mt-2">
                <div className="bg-zinc-500 w-36 h-fit text-zinc-50 text-base py-2 flex justify-center rounded-2xl">
                  Credit
                </div>
                <div className="bg-zinc-300 w-36 h-fit text-zinc-900 py-2 flex justify-center rounded-2xl">
                  Withdraw
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-clip rounded-b-3xl">
          <div className="bg-zinc-100 rounded-t-xl w-fit font-semibold h-auto px-6 pt-2 text-sm open-sans-basic">
            Spendings
          </div>
          <div className="bg-zinc-100 rounded-3xl h-full rounded-tl-none p-4 flex flex-col">
            <div className="flex justify-between">
              <div className="min-w-[150px] max-w-[250px] font-normal text-4xl m-2">
                ${expense}
              </div>
              <div className="bg-zinc-500 w-36 h-fit text-zinc-50 text-base py-2 text-center rounded-2xl m-2">
                Add
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-clip rounded-b-3xl">
          <div className="bg-zinc-100 rounded-t-xl font-semibold w-fit h-auto px-6 pt-2 text-sm open-sans-basic">
            Savings
          </div>
          <div className="bg-zinc-100 rounded-3xl h-full rounded-tl-none p-4 flex flex-col">
            <div className="flex justify-between">
              <div className="min-w-[150px] max-w-[250px] font-normal text-4xl m-2">
                ${saving}
              </div>
              <div className="bg-zinc-500 w-36 h-fit text-zinc-50 text-base py-2 text-center rounded-2xl m-2">
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
