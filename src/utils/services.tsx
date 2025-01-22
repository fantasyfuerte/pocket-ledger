export enum TransactionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export interface TransactionAction {
  type: TransactionType;
  payload: Transaction | { id: Transaction["id"] };
}

export const reduce = (state: Transaction[], action: TransactionAction) => {
  switch (action.type) {
    case TransactionType.ADD:
      return [...state, action.payload as Transaction];
    case TransactionType.REMOVE:
      return state.filter(
        (transaction) => transaction.id !== action.payload.id
      );
  }
};
