import { FormEventHandler, ReactNode } from 'react';

type SelectOptionProps = {
  label: string;
  value?: any;
  onChange?: FormEventHandler<HTMLElement>;
  children?: ReactNode[]
};

const SelectOption: React.FC<SelectOptionProps> = ({
  label,
  value,
  onChange,
  children
}) => {
  return (
    <div>
      <label className="font-normal font-mono text-dark dark:text-white text-lg ">
        {label}
      </label>
      <select className="block w-full bg-gray-200 dark:bg-gray-700 border-none rounded-md my-2" value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default SelectOption;
