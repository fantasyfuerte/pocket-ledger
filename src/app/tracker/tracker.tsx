"use client";

import { useReducer, useEffect } from "react";
import TransactionForm from "../../components/transaction-form";
import { initialState, reduce, saveData } from "@/utils/services";
import TransactionHistory from "@/components/transaction-history";
import Balance from "@/components/balance";
import PieChart from "@/components/pie-chart";

function TrackerApp() {
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
    <section className="flex flex-col gap-3 md:grid grid-cols-3">
      <TransactionForm dispatch={dispatch} />
      <Balance data={{ incomes, expenses }} />
      <PieChart data={{ incomes, expenses }} />
      <TransactionHistory state={state} dispatch={dispatch} />
    </section>
  );
}

export default TrackerApp;
