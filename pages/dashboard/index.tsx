import Box from '@mui/material/Box'
import MainView from '@/components/MainView/MainView'
import { CircularProgress, Typography } from '@mui/material'

export default function Dashboard() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
		>
			<Typography
				marginBottom={10}
				marginTop='100px'
				textAlign='center'
				fontSize='42px'
			>
				Sistema de Apuração dos Registros <br /> Universitários de Extensão
			</Typography>

			<Box
				display='flex'
				flexDirection='column'
				gap={4}
				width='320px'
				bgcolor='#006633'
				m={1}
				borderRadius='4px'
				px='40px'
				py='24px'
			>
				<Typography fontSize='40px' fontWeight='bold'></Typography>
			</Box>

			<Box display='flex' alignItems='center' justifyContent='center' flex={1}>
				<MainView />
			</Box>
		</Box>
	)
}
