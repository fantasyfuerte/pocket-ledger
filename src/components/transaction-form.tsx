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

    if (!amount) return;
    if (!description)
      description = `day ${new Date().getDate()}-${
        new Date().getMonth() + 1
      } transaction`;

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
    <div className="">
      <form
        onSubmit={handleForm}
        className="flex flex-col items-center gap-2 bg-backgroundSecondary rounded-xl p-2"
      >
        <input
          className="bg-transparent p-2 outline-none"
          type="number"
          name="amount"
          placeholder="Amount"
          required
        />
        <input
          className="bg-transparent p-2 outline-none"
          type="text"
          name="description"
          placeholder="Description"
        />
        <button className="bg-cta w-fit px-4 py-2 rounded-full text-backgroundPrimary font-semibold active:bg-cta/60">
          Add
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
