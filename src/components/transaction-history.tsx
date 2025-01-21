import { Transaction, TransactionAction } from "@/utils/services";
import TransactionItem from "./transaction-item";
import { GiClockwork } from "react-icons/gi";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  return (
    <article className="bg-backgroundSecondary p-3 rounded-xl md:col-span-3">
      <h4 className="text-primary/80 font-semibold text-center flex gap-1">
        <GiClockwork size={24} /> History
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
