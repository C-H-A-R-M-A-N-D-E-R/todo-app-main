import { PropsInterface } from "../../interfaces";

const Form = (props: PropsInterface.FormProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const text = form.get("input") as string;
    props.addTodo({ text: text, active: false });
    e.currentTarget.reset();
  };

  return (
    <form
      action="post"
      onSubmit={onSubmit}
      autoComplete="off"
      className="flex items-center gap-4 bg-dt-vddb py-3 px-4 mb-8"
    >
      <button className="rounded-full h-6 w-6 border-[1px] border-dt-vdgb"></button>
      <input
        type="text"
        name="input"
        className="w-full bg-p-t text-dt-lgb2 outline-none text-xl"
      />
    </form>
  );
};

export default Form;
