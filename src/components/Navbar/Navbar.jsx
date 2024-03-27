import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeLink =
    "rounded-2xl text-zinc-100 w-28 h-full flex items-center justify-center bg-zinc-600";
  const normalLink =
    "rounded-2xl transition ease-in-out text-zinc-900 w-28 h-full flex items-center justify-center hover:bg-zinc-600 hover:text-zinc-100";

  return (
    <>
      <div className="rounded-3xl py-2 bg-zinc-100 mx-80 flex items-center h-14 mt-5 open-sans-basic">
        <div className="flex items-center w-full h-full text-zinc-900 justify-evenly">
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
            Savings
          </NavLink>
        </div>
        <div>
          <div className="bg-zinc-100 w-[40px] h-[40px] rounded-full border-solid border-zinc-900 border-2 ml-6"></div>
        </div>
      </div>
    </>
  );
};
