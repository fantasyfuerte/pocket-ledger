import { TransactionAction, TransactionType } from "@/utils/services";
import React from "react";

interface Props {
  dispatch: (action: TransactionAction) => void;
}

function TransactionForm({ dispatch }: Props) {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const description = formData.get("description")?.toString();
    const amount = formData.get("amount");

    if (!description || !amount) return;

    const id = (Math.random() * 110 * Math.random()).toString();

    dispatch({
      type: TransactionType.ADD,
      payload: {
        id: id,
        date: new Date(),
        description: description,
        amount: amount,
      },
    });
    const inputText = e.currentTarget.elements.namedItem("description");
    if (inputText instanceof HTMLInputElement) inputText.value = "";
    const inputNumber = e.currentTarget.elements.namedItem("amount");
    if (inputNumber instanceof HTMLInputElement) inputNumber.value = "";
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input type="number" name="amount" placeholder="Amount" required />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
