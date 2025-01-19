import { useReducer } from "react";
import TransactionForm from "../../components/transaction-form";
import { initialState, reduce } from "@/utils/services";


function TrackerApp() {

  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <TransactionForm />
      {state.map((transaction) => (
        <div key={transaction.id}>
          {transaction.description}
        </div>
      ))}
    </div>
  );
}

export default TrackerApp;
