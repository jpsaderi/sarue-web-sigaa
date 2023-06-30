import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { FileUploader } from '../FileUploader/FileUploader'

export default function MainView() {
	return (
		<Container>
			<Typography>Bem vindo a Mainview!</Typography>
			<FileUploader />
		</Container>
	)
}
