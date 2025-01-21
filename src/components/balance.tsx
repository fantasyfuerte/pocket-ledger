interface Props {
  data: {
    incomes: number;
    expenses: number;
  };
}

function Balance({ data }: Props) {
  const { incomes, expenses } = data;
  console.log(incomes, expenses);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Incomes</h2>
        <p className="text-2xl font-bold">{incomes}</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Expenses</h2>
        <p className="text-2xl font-bold">{expenses * -1}</p>
      </div>
      <div className="flex flex-col items-center gap-2 col-span-2">
        <h2 className="text-xl font-bold">Balance</h2>
        <p className="text-2xl font-bold">{incomes + expenses}</p>
      </div>
    </div>
  );
}

export default Balance;
