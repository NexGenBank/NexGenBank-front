import { Balance } from "../components/Balance/Balance";
import { Navbar } from "../components/Navbar/Navbar";
import { TransactionsList } from "../components/TransactionsList/TransactionsList";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Balance />
      <TransactionsList />
    </>
  );
};
