interface Props {
  data: {
    incomes: number;
    expenses: number;
  };
}

function Balance({ data }: Props) {
  const { incomes, expenses } = data;

  return (
    <div className="grid grid-cols-2 gap-2 bg-backgroundSecondary rounded-xl p-2">
      <div className="flex flex-col gap-2 items-center bg-middleColor rounded-xl p-2 text-backgroundPrimary">
        <h2 className="text-xl font-bold">Incomes</h2>
        <p className="text-2xl font-bold">${incomes}</p>
      </div>
      <div className="flex flex-col gap-2 items-center bg-cta rounded-xl p-2 text-backgroundPrimary">
        <h2 className="text-xl font-bold text">Expenses</h2>
        <p className="text-2xl font-bold">${expenses * -1}</p>
      </div>
      <div className="flex flex-col items-center gap-2 col-span-2 bg-primary rounded-xl p-2">
        <h2 className="text-xl font-bold text-backgroundPrimary">Balance</h2>
        <p className="text-2xl font-bold text-backgroundPrimary">
          ${incomes + expenses}
        </p>
      </div>
    </div>
  );
}

export default Balance;
