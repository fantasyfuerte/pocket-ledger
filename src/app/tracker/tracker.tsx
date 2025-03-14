"use client";

import { useReducer, useEffect } from "react";
import TransactionForm from "../../components/transaction-form";
import { reduce } from "@/utils/services";
import TransactionHistory from "@/components/transaction-history";
import Balance from "@/components/balance";
import PieChart from "@/components/pie-chart";

function TrackerApp() {
  const getData = (key: string) => {
    let initial = [];
    const data = localStorage.getItem(key);
    if (data) {
      initial = JSON.parse(data);
    }
    return initial;
  };

  const saveData = (key: string, content: string) => {
    localStorage.setItem(key, content);
  };

  const initialState = getData("transactions");

  const [state, dispatch] = useReducer(reduce, initialState);

  useEffect(() => {
    saveData("transactions", JSON.stringify(state));
  }, [state]);

  const incomes = state.reduce((acc, curr) => {
    if (curr.amount > 0) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  const expenses = state.reduce((acc, curr) => {
    if (curr.amount < 0) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  return (
    <section className="flex flex-col gap-3 sm:px-20 md:px-44 lg:px-64 xl:px-96">
      <TransactionForm dispatch={dispatch} />
      <Balance data={{ incomes, expenses }} />
      <PieChart data={{ incomes, expenses }} />
      <TransactionHistory state={state} dispatch={dispatch} />
    </section>
  );
}

export default TrackerApp;
