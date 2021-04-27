import 'styles/global.css';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
