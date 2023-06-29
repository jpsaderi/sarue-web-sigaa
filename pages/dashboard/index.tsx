import { Container } from '@mui/system'
import SideNav from '../../components/sideNav'
import MainView from '../mainView'
import { Grid } from '@mui/material'
import * as React from 'react'

export default function Dashboard() {
	return (
		<Container
			sx={{ flexGrow: 1 }}
			className='h-screen w-screen p-0 max-w-full'
		>
			<Grid container>
				<Grid container item xs={3} className='h-screen'>
					<SideNav />
				</Grid>
				<Grid item xs={9}>
					<MainView />
				</Grid>
			</Grid>
		</Container>
	)
}
