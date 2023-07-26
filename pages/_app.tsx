import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Grid } from '@mui/material'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import SideNav from '@/components/SideNav/SideNav'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>SARUE</title>
				<meta
					name='description'
					content='Sistema De Acompanhamento Dos Registros Universitarios De Extensao'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Grid className='max-h-screen column'>
					<Header />
					<SideNav>
						<Component {...pageProps} />
					</SideNav>
					<Footer />
				</Grid>
			</main>
		</>
	)
}
