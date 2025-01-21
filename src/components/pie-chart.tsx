import { VictoryPie } from "victory";

interface Props {
  data: {
    incomes: number;
    expenses: number;
  };
}

function PieChart({ data }: Props) {
  const incomes = data.incomes;
  const expenses = data.expenses * -1;

  return (
    <article className="bg-backgroundSecondary rounded-xl p-4">
      <VictoryPie
        innerRadius={100}
        padAngle={5}
        cornerRadius={10}
        labels={[]}
        animate={{ duration: 1000 }}
        data={[
          { x: "Incomes", y: incomes },
          { x: "Expenses", y: expenses },
        ]}
      />
    </article>
  );
}

export default PieChart;
