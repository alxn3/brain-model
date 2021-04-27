import { Dispatch } from 'react';

type ToggleOptionProps = {
  id: string;
  label: string;
  checked: boolean;
  setChecked: Dispatch<any>;
};

const ToggleOption: React.FC<ToggleOptionProps> = ({
  id,
  label,
  checked,
  setChecked,
}) => {
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        className="form-checkbox opacity-0 fixed w-0"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label
        htmlFor={id}
        className="font-normal inline-block font-mono text-white text-lg bg-gray-800 p-1 rounded-md label-checked:bg-red-500"
      >
        {label}
      </label>
    </div>
  );
};

export default ToggleOption;
