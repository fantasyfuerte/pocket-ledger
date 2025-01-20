import { TransactionAction, TransactionType } from "@/utils/services";
import React from "react";

interface Props {
  dispatch: (action: TransactionAction) => void;
}

function TransactionForm({ dispatch }: Props) {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let description = formData.get("description")?.toString();
    const amount = formData.get("amount");

    if (!amount || isNaN(Number(amount))) return;
    if (!description)
      description = `My "${new Date().toLocaleDateString()}" transaction`;

    const id = (Math.random() * 110 * Math.random()).toString();

    dispatch({
      type: TransactionType.ADD,
      payload: {
        id: id,
        date: new Date(),
        description: description,
        amount: Number(amount),
      },
    });
    const inputText = e.currentTarget.elements.namedItem("description");
    if (inputText instanceof HTMLInputElement) inputText.value = "";
    const inputNumber = e.currentTarget.elements.namedItem("amount");
    if (inputNumber instanceof HTMLInputElement) inputNumber.value = "";
  };

  return (
    <article>
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-2 bg-middleColor/80 rounded-xl p-4"
      >
        <input
          className="p-2 outline-none text-center bg-backgroundSecondary/80 rounded-md text-primary font-semibold placeholder:text-primary/80"
          type="number"
          name="amount"
          placeholder="Amount"
          required
        />
        <input
          className="bg-backgroundSecondary/80 p-2 outline-none text-center rounded-md text-primary font-semibold placeholder:text-primary/80"
          type="text"
          name="description"
          placeholder="Description"
        />
        <button className="bg-cta w-fit px-4 py-2 rounded-xl text-backgroundPrimary font-semibold active:bg-cta/60 self-center">
          Add
        </button>
      </form>
    </article>
  );
}

export default TransactionForm;
