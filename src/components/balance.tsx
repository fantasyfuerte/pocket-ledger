import { Transaction } from "@/utils/services";

interface Props {
  state: Transaction[];
}

function Balance({ state }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Incomes</h2>
        <p className="text-2xl font-bold">
          {state.reduce((acc, curr) => {
            if (curr.amount > 0) {
              return acc + curr.amount;
            }
            return acc;
          }, 0)}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Expenses</h2>
        <p className="text-2xl font-bold">
          {state.reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 col-span-2">
        <h2 className="text-xl font-bold">Balance</h2>
        <p className="text-2xl font-bold">
          {state.reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>
    </div>
  );
}

export default Balance;
