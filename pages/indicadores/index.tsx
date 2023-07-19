import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export default function Indicadores() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
		>
			<Typography marginTop='100px' textAlign='center' fontSize='42px'>
				Indicadores
			</Typography>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				flex={1}
			></Box>
		</Box>
	)
}
