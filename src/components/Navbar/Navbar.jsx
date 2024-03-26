import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeLink =
    "bg-zinc-100 font-semibold text-zinc-900 w-full h-full text-center py-2";
  const normalLink =
    "py-2 transition ease-in-out bg-zinc-900 text-zinc-100 w-full h-full text-center hover:bg-zinc-100 hover:text-zinc-900";

  return (
    <>
      <div className="mx-80 flex items-center mt-5 open-sans-basic text-lg">
        <div className="w-full m-autoh-full rounded-lg overflow-hidden">
          <div className="list-none text-xl flex text-zinc-900 justify-evenly uppercase">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
            <NavLink
              to="/transfer"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Transfer
            </NavLink>
            <NavLink
              to="/expense"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Expenses
            </NavLink>
            <NavLink
              to="/saving"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              savings
            </NavLink>
          </div>
        </div>
        <div>
          <div className="bg-zinc-100 w-[40px] h-[40px] rounded-full border-solid border-zinc-900 border-2 ml-6"></div>
        </div>
      </div>
    </>
  );
};
