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

export const getData = (key: string) => {
  let initial = [];
  const data = window.localStorage.getItem(`${key}`);
  if (data) {
    initial = JSON.parse(data);
  }
  return initial;
};

export const saveData = (key: string, content: string) => {
  window.localStorage.setItem(key, content);
};

export interface TransactionAction {
  type: TransactionType;
  payload: Transaction | { id: Transaction["id"] };
}

export const initialState = getData("transactions");

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
