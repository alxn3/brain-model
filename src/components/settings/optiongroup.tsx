import { FormEventHandler, ReactNode } from 'react';

type OptionGroupProps = {
  name: string;
  children: ReactNode[];
  className?: string;
  contentClassName?:string;
  onChange?: FormEventHandler<HTMLElement>;
};

const OptionGroup: React.FC<OptionGroupProps> = ({
  name,
  children,
  className,
  contentClassName,
  onChange,
}) => {
  return (
    <div className={className}>
      <h1 className="text-xl font-mono text-black dark:text-white">{name}</h1>
      <div className={contentClassName} onChange={onChange}>
        {children}
      </div>
    </div>
  );
};

export default OptionGroup;
