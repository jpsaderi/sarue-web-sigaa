import { Container, List } from '@mui/material'
import CustomListItem from '../CustomListItem/CustomListItem'

const SideNavMenu = () => {
	return (
		<Container className='bg-darkGrey h-full p-0 '>
			<nav aria-label='Navegacao principal'>
				<List>
					<CustomListItem text='Adicionar arquivos' linkRoute='/' />
					<CustomListItem text='Indicadores' linkRoute='/indicadores' />
					<CustomListItem text='Sobre o projeto' linkRoute='/about' />
				</List>
			</nav>
		</Container>
	)
}

export default SideNavMenu
