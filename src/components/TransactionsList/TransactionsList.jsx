import axios from "axios";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      fontSize: "14px",
    },
  },
  headCells: {
    style: {
      fontSize: "16px"
    }
  }
};

createTheme(
  "lightgray",
  {
    background: {
      default: "#f4f4f5",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    button: {
      default: "#000000",
    },
  },
  "dark"
);

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  const columns = [
    {
      name: "Transaction Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.price,
    },
  ];

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getTransactions() {
      try {
        const { data } = await axios.get(apiUrl);
        setTransactions(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getTransactions();
  }, []);

  return (
    <>
      <div className="mt-10">
        <div className="text-xl open-sans-basic">Transactions </div>
        <div className="mt-3 bg-zinc-100 rounded-3xl w-full min-h-52 p-3">
          <DataTable
            columns={columns}
            data={transactions}
            theme="lightgray"
            pagination
            customStyles={customStyles}
          />
        </div>
      </div>
    </>
  );
};
