type RadioOptionProps = {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const RadioOption: React.FC<RadioOptionProps> = ({ id, name, label, defaultChecked }) => {
  return (
    <div className="inline-block">
      <input
        type="radio"
        id={id}
        name={name}
        className="form-radio opacity-0 fixed w-0"
        value={id}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className="font-light font-mono text-black dark:text-white text-xl inline-block bg-gray-200 dark:bg-gray-800 p-2 rounded-md label-checked:bg-red-500"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioOption;
