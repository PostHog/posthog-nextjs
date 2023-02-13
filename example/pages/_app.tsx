import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { usePostHog } from "next-use-posthog";


export default function App({ Component, pageProps }: AppProps) {
  usePostHog("phc_zqSH1PZb6nKLcxrJ5t8g8NJnG7mMofmlMLwB5PCMtNX", {
    api_host: "http://localhost:8000",
  });

  return <Component {...pageProps} />
}
