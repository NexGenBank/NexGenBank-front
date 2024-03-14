import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div className="w-[90%] m-auto flex items-center mt-7 open-sans-basic text-lg">
        <div className="bg-zinc-900 w-[90%] m-auto h-fit p-2 rounded-xl effect">
          <div className="list-none flex text-zinc-50 justify-evenly">
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/transfer">Transfer</Link>
            <Link to="/expense">Expense</Link>
            <Link to="/saving">Saving</Link>
          </div>
        </div>
        <div>
          <div className="bg-zinc-50 w-[40px] h-[40px] rounded-full border-solid border-zinc-900 border-2"></div>
        </div>
      </div>
    </>
  );
};
