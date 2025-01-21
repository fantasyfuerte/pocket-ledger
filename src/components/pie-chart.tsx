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
  const balance = incomes + expenses;

  return (
    <article className="bg-backgroundSecondary rounded-xl p-4">
      <VictoryPie
        innerRadius={100}
        padAngle={5}
        cornerRadius={10}
        labels={[]}
        animate={{ duration: 1000 }}
        colorScale={["#92394b", "#352640"]}
        data={[
          { x: "expenses", y: expenses },
          { x: "balance", y: balance },
        ]}
      />
    </article>
  );
}

export default PieChart;
