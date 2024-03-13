export const Balance = () => {
  return (
    <>
      <div className="text-2xl open-sans-basic font-semibold">Account name</div>
      <div className="text-xl open-sans-basic mt-3">
        Balance :
        <div className="mt-4 border-2 rounded-lg w-52 h-fit p-6 font-normal flex justify-center text-3xl">
          $$$$$$
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        <div className="bg-zinc-900 w-28 text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
          Withdraw
        </div>
        <div className="bg-zinc-900 w-28 text-zinc-50 px-6 py-3 flex justify-center rounded-xl">
          Credit
        </div>
      </div>
    </>
  );
}
