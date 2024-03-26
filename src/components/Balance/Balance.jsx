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
      <div className="px-4 pt-1 text-xl font-semibold open-sans-basic bg-zinc-100 w-fit rounded-t-xl">
        Account name
      </div>
      <div className="flex w-full justify-between gap-2 items-center uppercase">
        <div className="bg-zinc-100 rounded-lg rounded-tl-none px-4 py-3 h-40 flex flex-col flex-nowrap justify-start w-full">
          <div className="text-md open-sans-basic font-semibold ">Balance</div>
          <div className="flex justify-between px-4 mt-2">
            <div className="min-w-[150px] max-w-[250px] font-normal text-4xl mt-1">
              ${balance}
            </div>
            <div className="flex flex-col flex-nowrap gap-3">
              <div className="bg-red-600 w-28 h-fit text-zinc-50 font-semibold px-6 py-2 flex justify-center rounded-md">
                Withdraw
              </div>
              <div className="bg-green-600 w-28 h-fit text-zinc-50 font-semibold px-6 py-2 flex justify-center rounded-md">
                Credit
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 rounded-lg px-4 py-3 h-40 flex flex-col flex-nowrap justify-start w-full">
          <div className="text-md open-sans-basic font-semibold">Expense</div>
          <div className="flex justify-between px-4 mt-2">
            <div className="min-w-[150px] max-w-[250px] font-normal text-4xl mt-1">
              ${expense}
            </div>
            <div className="flex flex-col flex-nowrap gap-5">
              <div className="bg-blue-900 w-28 h-fit text-zinc-50 font-semibold px-6 py-2 flex justify-center rounded-md">
                Add
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 rounded-lg px-4 py-3 h-40 flex flex-col flex-nowrap justify-start w-full">
          <div className="text-md open-sans-basic font-semibold">Savings</div>
          <div className="flex justify-between px-4 mt-2">
            <div className="min-w-[150px] max-w-[250px] font-normal text-4xl mt-1">
              ${saving}
            </div>
            <div className="flex flex-col flex-nowrap gap-5">
              <div className="bg-blue-900 w-28 h-fit text-zinc-50 font-semibold px-6 py-2 flex justify-center rounded-md">
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
