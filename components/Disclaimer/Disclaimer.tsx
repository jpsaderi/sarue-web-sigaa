import React, { useState } from 'react'
import { Box, Button, Checkbox, Typography } from '@mui/material'
import { useRouter } from 'next/router'

interface DisclaimerProps {
	open: boolean
	onAccept: () => void
}

const Disclaimer: React.FC<DisclaimerProps> = ({ open, onAccept }) => {
	const [accepted, setAccepted] = useState(false)
	const router = useRouter()

	if (!open) {
		return null
	}

	const handleAccept = () => {
		// Marca o disclaimer como aceito no armazenamento local
		localStorage.setItem('disclaimerAccepted', 'true')
		// Executa a função onAccept para avançar para a próxima tela
		onAccept()

		// Redireciona para a página "/dashboard"
		router.push('/dashboard')
	}

	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 9999,
			}}
		>
			<Box
				sx={{
					backgroundColor: '#006633',
					padding: '24px',
					borderRadius: '8px',
					boxShadow: 4,
					maxWidth: '1200 px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{/* Texto genérico de disclaimer */}
				<Typography
					textAlign='center'
					fontSize='46px'
					variant='h5'
					gutterBottom
				>
					Termo de uso e Política de privacidade
				</Typography>
				<Typography
					gutterBottom
					sx={{ textAlign: 'justify', maxWidth: '1224px' }}
				>
					{' '}
					<span style={{ fontSize: '1.2rem' }}>
						Este sistema, denominado SARUE (Sistema de Acompanhamento dos
						Registros Universitários de Extensão), tem como objetivo fornecer
						informações sobre atividades de extensão universitária com base nos
						dados do sistema SIGAA (Sistema Integrado de Gestão de Atividades
						Acadêmicas). Ao utilizar o SARUE, você concorda que além de coletar
						informações sobre as atividades de Extensão, ele também irá utilizar
						seu login e senha do SIGAA para acessar o sistema e, assim, obter os
						dados necessários para o seu devido funcionamento. Também concorda
						que as informações coletadas serão utilizadas exclusivamente para o
						propósito de fornecer os serviços e funcionalidades do SARUE. Esses
						dados serão tratados com sigilo e não serão compartilhados com
						terceiros sem a devida autorização. O sistema implementa medidas de
						segurança para proteger os dados dos usuários, no entanto, é
						responsabilidade do usuário tomar as devidas precauções para
						proteger suas informações pessoais. Dessa forma, você concorda que
						todo o conteúdo e dados disponibilizados pelo SARUE são de
						propriedade da instituição e estão protegidos por direitos autorais
						e de propriedade intelectual. Sendo assim, ao clicar em "Avançar"
						você concorda em cumprir as condições acima mencionadas e aceita os
						termos deste disclaimer.
					</span>
				</Typography>

				{/* Checkbox para marcar que o usuário aceita os termos */}
				<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
					<Checkbox
						checked={accepted}
						onChange={e => setAccepted(e.target.checked)}
					/>
					<Typography variant='body2'>
						Ao clicar em "Avançar", você concorda com os termos mencionados
						acima.
					</Typography>
				</Box>

				{/* Botão de Avançar */}
				<Button
					variant='contained'
					color='primary'
					onClick={handleAccept}
					sx={{ mt: 2 }}
					disabled={!accepted} // Desabilita o botão se o checkbox não foi marcado
				>
					Avançar
				</Button>
			</Box>
		</Box>
	)
}

export default Disclaimer
