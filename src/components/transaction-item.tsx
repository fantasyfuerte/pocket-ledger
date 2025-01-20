import {
  Transaction,
  TransactionAction,
  TransactionType,
} from "@/utils/services";

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
    <li key={transaction.id} className="bg-backgroundSecondary m-2">
      <div className="flex flex-col gap-2">
        <p className="text-primary font-semibold">{transaction.date}</p>
        <p className="text-primary font-semibold">{transaction.description}</p>
      </div>
      <p className="text-primary font-semibold text-lg">
        ${transaction.amount}
      </p>
      <button
        onClick={() => handleClick(transaction.id)}
        className="bg-cta px-4 py-2 rounded-xl text-backgroundPrimary font-semibold active:bg-cta/60 self-center m-2"
      >
        delete
      </button>
    </li>
  );
}

export default TransactionItem;
