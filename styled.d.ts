import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            primaryRGB: string,
            secondary: string,
            red: string
        },
        btn: {
            maxWidth: string,
            colors: {
                white: string
            },
            margin: string,
            padding: string
        },
        media: {
            desktopSmall: string,
            tabletBig: string,
            tabletSmall: string,
            phoneBig: string
        }
    }
}