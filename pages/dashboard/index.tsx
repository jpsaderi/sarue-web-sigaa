import SideNavMenu from '../../components/SideNav/SideNavMenu/SideNavMenu'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import MainView from '../../components/MainView/MainView'

export default function Dashboard() {
	return (
		<Container className='max-h-min w-screen p-0 max-w-full'>
			<Grid container>
				<Grid container item xs={2} className='h-screen'>
					<SideNavMenu />
				</Grid>
				<Grid item xs={10} className='bg-lightGrey'>
					<MainView />
				</Grid>
			</Grid>
		</Container>
	)
}
