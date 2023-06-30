import { Container } from '@mui/system'
import { FileUploader } from '../FileUploader/FileUploader'

export default function MainView() {
	return (
		<Container className='pt-16'>
			<FileUploader />
		</Container>
	)
}
