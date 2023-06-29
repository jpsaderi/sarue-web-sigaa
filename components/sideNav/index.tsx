import {
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import Box from '@mui/system/Box'
import Link from 'next/link'

const SideNav = () => {
	return (
		<Box className='bg-darkGrey fixed h-full w-1/4'>
			<nav aria-label='Navegacao principal'>
				<List>
					<ListItem>
						<ListItemButton className='hover:bg-sky-700'>
							<ListItemText>Indicadores</ListItemText>
							<Link href='/'></Link>
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton
							className='hover:bg-sky-700'
							component='a'
							href='/about'
						>
							<ListItemText>Sobre o projeto</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	)
}

export default SideNav
