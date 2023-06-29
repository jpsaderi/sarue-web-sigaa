import { AppBar, Container, Typography } from '@mui/material'

export const Header = () => {
	return (
		<Container className='w-screen p-0 m-0 mr-0 max-w-full'>
			<Typography
				variant='h3'
				className='bg-darkBlue'
				sx={{ flexGrow: 1, textAlign: 'center' }}
			>
				SAIE - SIGAA
			</Typography>
		</Container>
	)
}
