import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const TransactionsList = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getTransactions() {
      setLoading(true);
      try {
        const { data } = await axios.get(apiUrl);
        setTransactions(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
  
    getTransactions();
  }, []);

  return (
    <>
      <div className="mt-10">
        <div className="text-xl open-sans-basic">Transactions </div>
        <div className="mt-3 bg-zinc-100 rounded-3xl w-full h-52">
          
        </div>
      </div>
    </>
  );
};
