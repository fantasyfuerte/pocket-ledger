"use client";

import {
  Transaction,
  TransactionAction,
  TransactionType,
} from "@/utils/services";
import { useState } from "react";
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

  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <li
      key={transaction.id}
      onClick={() => setDetailsVisible(!detailsVisible)}
      className=" bg-middleColor rounded-xl  active:bg-middleColor/60 hover:bg-middleColor/70 p-2"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p
            className={`font-bold text-lg ${
              transaction.amount > 0 ? "text-primary" : "text-cta"
            }`}
          >
            {transaction.amount < 0 && "-"}${Math.abs(transaction.amount)}
          </p>
          <p className="text-primary/80 font-semibold">
            {detailsVisible
              ? transaction.description
              : transaction.description.slice(0, 20)}
            {!detailsVisible && transaction.description.length > 20 && "..."}
          </p>
        </div>
        <button
          onClick={() => handleClick(transaction.id)}
          className="text-cta active:text-cta/70 font-semibold active:bg-cta/60 self-center"
        >
          <GiTrashCan size={30} />
        </button>
      </div>
      {detailsVisible && (
        <div className="h-10 flex justify-center items-center">
          <p className="text-primary/80 font-semibold">{transaction.date}</p>
        </div>
      )}
    </li>
  );
}

export default TransactionItem;
