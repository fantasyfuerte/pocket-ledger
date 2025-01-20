import { Transaction, TransactionAction } from "@/utils/services";

interface Props {
  state: Transaction[];
  dispatch: (action: TransactionAction) => void;
}
function TransactionHistory({ state, dispatch }: Props) {
  return <article></article>;
}

export default TransactionHistory;
