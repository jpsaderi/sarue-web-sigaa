import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Grid } from '@mui/material'
import Head from 'next/head'
import SideNav from '@/components/SideNav/SideNav'
import { useEffect, useState } from 'react'
import Disclaimer from '@/components/Disclaimer/Disclaimer'

export default function App({ Component, pageProps }: AppProps) {
	const [showDisclaimer, setShowDisclaimer] = useState(true)

	useEffect(() => {
		// Verifica se o disclaimer já foi aceito anteriormente
		const disclaimerAccepted = localStorage.getItem('disclaimerAccepted')
		if (disclaimerAccepted) {
			setShowDisclaimer(false)
		}
	}, [])

	const handleAcceptDisclaimer = () => {
		// Marca o disclaimer como aceito no armazenamento local
		localStorage.setItem('disclaimerAccepted', 'true')
		setShowDisclaimer(false)
	}

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
				{/* Exibir o Disclaimer antes de renderizar a página principal */}
				{showDisclaimer ? (
					<Disclaimer open={true} onAccept={handleAcceptDisclaimer} />
				) : (
					<>
						<Grid className='max-h-screen column'>
							<Header />
							<SideNav>
								<Component {...pageProps} />
							</SideNav>
							<Footer />
						</Grid>
					</>
				)}
			</main>
		</>
	)
}
