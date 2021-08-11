import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../redux/store';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/defaultTheme';
import '../styles/_app.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App);
