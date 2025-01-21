import { TransactionAction, TransactionType } from "@/utils/services";
import { GiVacuumCleaner } from "react-icons/gi";

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
        date: new Date().toLocaleString(),
        description: description,
        amount: Number(amount),
      },
    });
    const inputText = e.currentTarget.elements.namedItem("description");
    if (inputText instanceof HTMLInputElement) inputText.value = "";
    const inputNumber = e.currentTarget.elements.namedItem("amount");
    if (inputNumber instanceof HTMLInputElement) inputNumber.value = "";
  };

  const clearForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.form?.reset();
  };

  return (
    <article>
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-2 bg-middleColor/80 rounded-xl p-4"
      >
        <input
          className="text-2xl p-3 outline-none text-center bg-backgroundSecondary/80 rounded-md text-primary font-semibold placeholder:text-primary/50"
          type="number"
          name="amount"
          placeholder="-$35"
          required
        />
        <input
          className="bg-backgroundSecondary/80 p-2 outline-none text-center rounded-md text-primary font-semibold placeholder:text-primary/50"
          type="text"
          name="description"
          placeholder="Booking a flight"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-cta w-fit px-4 py-2 rounded-xl text-backgroundPrimary font-semibold active:bg-cta/60 flex-grow"
          >
            Add Transaction
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="bg-primary w-fit px-4 py-2 rounded-xl text-backgroundPrimary font-semibold active:bg-cta/60 self-center"
          >
            <GiVacuumCleaner size={24} />
          </button>
        </div>
      </form>
    </article>
  );
}

export default TransactionForm;
