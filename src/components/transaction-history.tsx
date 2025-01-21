import { Transaction, TransactionAction } from "@/utils/services";
import TransactionItem from "./transaction-item";
import { GiClockwork } from "react-icons/gi";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  return (
    <article className="bg-backgroundSecondary rounded-xl md:col-span-3 px-3 pb-4">
      <h4 className="text-primary/80 font-semibold flex gap-1 py-3">
        <GiClockwork size={24} /> History
      </h4>
      <ul className="flex flex-col gap-2">
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
