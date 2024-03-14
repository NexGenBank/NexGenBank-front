export const Balance = () => {
  return (
    <>
      <div className="text-2xl open-sans-basic font-semibold">Bank</div>
      <div className="flex flex-nowrap gap-2 justify-evenly w-full ">
        <div className="bg-white rounded-lg effect p-10 mt-4 h-48 flex flex-nowrap gap-10 min-w-[360px]">
          <div className="text-xl open-sans-basic">
            Balance
            <div className="rounded-lg min-w-[150px] max-w-[250px] font-normal text-4xl">
              $10 000 000
            </div>
          </div>
          <div className="flex flex-col flex-nowrap gap-5">
            <div className="bg-zinc-900 w-28 h-fit text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
              Withdraw
            </div>
            <div className="bg-zinc-900 w-28 h-fit text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
              Credit
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg effect p-10 mt-4 h-48 flex flex-nowrap justify-evenly gap-10 min-w-[360px]">
          <div className="text-xl open-sans-basic">
            EXPENSES
            <div className="rounded-lg min-w-[150px] max-w-[250px] font-normal text-4xl">
              $20 000 000
            </div>
          </div>
          <div className="flex flex-col flex-nowrap gap-5">
            <div className="bg-zinc-900 w-28 h-fit text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
              Add
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg effect p-10 mt-4 h-48 flex gap-10 min-w-[360px]">
          <div className="text-xl open-sans-basic">
            SAVINGS
            <div className="rounded-lg min-w-[150px] max-w-[250px] font-normal text-4xl">
              $30 000 000
            </div>
          </div>
          <div className="flex flex-col flex-nowrap gap-5">
            <div className="bg-zinc-900 w-28 h-fit text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
              Add
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
