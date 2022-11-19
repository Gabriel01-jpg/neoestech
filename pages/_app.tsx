import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';
import { AuthProvider } from '../context/AuthProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider direction="ltr">
      <AuthProvider >
        <Component {...pageProps} className="font-sans" />
      </AuthProvider>
    </ConfigProvider>
  )
}
