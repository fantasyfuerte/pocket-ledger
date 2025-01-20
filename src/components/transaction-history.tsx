import { Transaction, TransactionAction } from "@/utils/services";
import TransactionItem from "./transaction-item";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  return (
    <article>
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
