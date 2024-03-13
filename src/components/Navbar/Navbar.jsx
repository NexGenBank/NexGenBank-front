export const Navbar = () => {
  return (
    <>
      <div className="w-[90%] m-auto flex items-center mt-5 open-sans-basic text-lg">
        <div className="bg-zinc-900 w-[90%] m-auto h-fit p-2 rounded-xl">
          <li className="list-none flex text-zinc-50 justify-evenly">
            <ul>Home</ul>
            <ul>Account</ul>
            <ul>Transfer</ul>
            <ul>Expense</ul>
            <ul>Saving</ul>
          </li>
        </div>
        <div>
          <div className="bg-zinc-50 w-[40px] h-[40px] rounded-full border-solid border-zinc-900 border-2"></div>
        </div>
      </div>
    </>
  );
};
