import {
  Transaction,
  TransactionAction,
  TransactionType,
} from "@/utils/services";
import { GiTrashCan } from "react-icons/gi";

interface Props {
  transaction: Transaction;
  dispatch: (action: TransactionAction) => void;
}

function TransactionItem({ transaction, dispatch }: Props) {
  const handleClick = (id: Transaction["id"]) => {
    dispatch({
      type: TransactionType.REMOVE,
      payload: { id },
    });
  };

  return (
    <li
      key={transaction.id}
      className="flex justify-between bg-middleColor rounded-xl py-2 px-3 active:bg-middleColor/60"
    >
      <div className="flex flex-col">
        <p
          className={`font-bold text-lg ${
            transaction.amount > 0 ? "text-primary" : "text-cta"
          }`}
        >
          {transaction.amount < 0 && "-"}${Math.abs(transaction.amount)}
        </p>
        <p className="text-primary/80">{transaction.date}</p>
      </div>
      <button
        onClick={() => handleClick(transaction.id)}
        className="text-cta active:text-cta/70 font-semibold active:bg-cta/60 self-center"
      >
        <GiTrashCan size={30} />
      </button>
    </li>
  );
}

export default TransactionItem;
