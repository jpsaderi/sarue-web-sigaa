import { Container, Typography } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'

export const Header = () => {
	return (
		<Container className='w-screen p-0 m-0 mr-0 max-w-full'>
			<Typography
				variant='h4'
				className='bg-darkBlue'
				sx={{ flexGrow: 1, textAlign: 'center' }}
			>
				<BarChartIcon fontSize='large' />
				SARUE - SIGAA
			</Typography>
		</Container>
	)
}
