"use client";

import { useReducer, useEffect } from "react";
import TransactionForm from "../../components/transaction-form";
import { initialState, reduce } from "@/utils/services";
import TransactionHistory from "@/components/transaction-history";

function TrackerApp() {
  const [state, dispatch] = useReducer(reduce, initialState);
  useEffect(() => {
    alert("Hello World");
  }, [state]);

  return (
    <section className="flex flex-col gap-2">
      <TransactionForm dispatch={dispatch} />
      <TransactionHistory state={state} dispatch={dispatch} />
    </section>
  );
}

export default TrackerApp;
