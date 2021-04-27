import { FormEventHandler, ReactNode } from 'react';

type OptionGroupProps = {
  name: string;
  children: ReactNode[];
  className?: string;
  onChange?: FormEventHandler<HTMLElement>;
};

const OptionGroup: React.FC<OptionGroupProps> = ({
  name,
  children,
  className,
  onChange,
}) => {
  return (
    <div className={className}>
      <h1 className="text-xl font-mono text-white">{name}</h1>
      <div className="space-x-2" onChange={onChange}>
        {children}
      </div>
    </div>
  );
};

export default OptionGroup;
