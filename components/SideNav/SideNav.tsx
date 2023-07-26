import SideNavMenu from '../../components/SideNav/SideNavMenu/SideNavMenu'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

interface SideNavProps {
	children: React.ReactNode
}

const SideNav = ({ children }: SideNavProps) => {
	return (
		<Container className='max-h-min w-screen p-0 max-w-full'>
			<Grid container>
				<Grid container item xs={2} className='h-screen'>
					<SideNavMenu />
				</Grid>
				<Grid item xs={10} className='bg-lightGrey'>
					{children}
				</Grid>
			</Grid>
		</Container>
	)
}

export default SideNav
