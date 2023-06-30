import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Box, Container, Grid } from '@mui/material'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Dashboard from './dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
					<Dashboard />
					<Footer />
				</Grid>
			</main>
		</>
	)
}
