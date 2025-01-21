import { Transaction } from "@/utils/services";

interface Props {
  state: Transaction[];
}

function Balance({ state }: Props) {
  return (
    <div>
      {state.map((transaction: Transaction) => (
        <p key={transaction.id}>{transaction.amount}</p>
      ))}
    </div>
  );
}

export default Balance;
