import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../config/seo-config'
import { GlobalStyle } from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
