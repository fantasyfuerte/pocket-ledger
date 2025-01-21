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

  return (
    <section className="flex flex-col gap-2">
      <TransactionForm dispatch={dispatch} />
      <Balance state={state} />
      <PieChart />
      <TransactionHistory state={state} dispatch={dispatch} />
    </section>
  );
}

export default TrackerApp;
