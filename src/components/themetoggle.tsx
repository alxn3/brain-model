import { useTheme } from 'next-themes';

type Props = {
  className?: string;
};

const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <button
      className={
        'rounded-md p-2 font-mono focus:outline-none text-black bg-gray-200 dark:text-white dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors ' +
        className
      }
      onClick={() => {
        switch (theme) {
          case 'light':
            setTheme('dark');
            break;
          case 'dark':
            setTheme('light');
            break;
          default:
            setTheme(systemTheme === 'light' ? 'dark' : 'light');
            break;
        }
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
