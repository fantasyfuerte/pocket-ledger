import { Transaction, TransactionAction } from "@/utils/services";
import TransactionItem from "./transaction-item";
import { GiClockwork, GiPlainArrow } from "react-icons/gi";
import { useState } from "react";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  const [toDown, setToDown] = useState(false);

  const history = state.sort((a, b) => {
    const sort = toDown ? b.amount - a.amount : a.amount - b.amount;
    return sort;
  });

  return (
    <article className="bg-backgroundSecondary rounded-xl md:col-span-3 px-3 pb-4">
      <div className="flex justify-between">
        <h4 className="text-primary/80 font-semibold flex gap-1 py-3">
          <GiClockwork size={24} id="history" /> History
        </h4>
        <button
          className="text-primary/80"
          onClick={() => setToDown((prev) => !prev)}
        >
          <GiPlainArrow
            size={20}
            className={`mr-2 ${toDown ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {history.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            dispatch={dispatch}
          />
        ))}
        {state.length === 0 && (
          <li className="text-primary/80 font-semibold">No transactions yet</li>
        )}
      </ul>
    </article>
  );
}

export default TransactionHistory;
