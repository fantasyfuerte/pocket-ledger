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
    <VictoryPie
      innerRadius={100}
      padAngle={5}
      cornerRadius={10}
      labels={[]}
      data={[
        { x: "Incomes", y: incomes },
        { x: "Expenses", y: expenses },
      ]}
    />
  );
}

export default PieChart;
