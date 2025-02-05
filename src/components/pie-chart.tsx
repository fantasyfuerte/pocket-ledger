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
  const balance = incomes - expenses;

  return (
    <article className="bg-backgroundSecondary rounded-xl p-4 active:bg-middleColor">
      {incomes == 0 && expenses == 0 ? (
        <p className="text-primary/80 font-semibold text-center">
          No data available
        </p>
      ) : (
        <>
          <div className="w-[320px] h-[320px] bg-transparent z-20 absolute"></div>
          <div className="z-10">
            <VictoryPie
              innerRadius={100}
              padAngle={5}
              cornerRadius={15}
              labels={[]}
              animate={{ duration: 1000 }}
              colorScale={["#92394b", "#352640"]}
              data={[
                { x: "expenses", y: expenses },
                { x: "balance", y: balance },
              ]}
            />
          </div>
        </>
      )}
    </article>
  );
}

export default PieChart;
