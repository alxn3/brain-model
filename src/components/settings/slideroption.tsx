import { FormEventHandler } from 'react';

type SliderOptionProps = {
  id: string;
  label: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: FormEventHandler<HTMLElement>;
  className?: string;
};

const ToggleOption: React.FC<SliderOptionProps> = ({
  id,
  label,
  min = 1,
  max = 100,
  step = 1,
  defaultValue,
  onChange,
  className
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="font-normal font-mono text-dark dark:text-white text-lg">
        {label}
      </label>
      <input
        type="range"
        className="block w-full h-6"
        id={id}
        min={min}
        step={step}
        max={max}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default ToggleOption;
