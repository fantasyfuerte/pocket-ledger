import { Transaction, TransactionAction } from "@/utils/services";
import TransactionItem from "./transaction-item";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  return (
    <article className="bg-middleColor p-1 rounded-xl">
      <h4 className="text-primary font-semibold text-center">
        Transaction History
      </h4>
      <ul>
        {state.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </article>
  );
}

export default TransactionHistory;
