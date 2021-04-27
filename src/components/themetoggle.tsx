import { useTheme } from 'next-themes';

type Props = {
  className?: string;
};

const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={
        'rounded-md p-2 font-mono text-black bg-gray-200 dark:text-white dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors ' +
        className
      }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
