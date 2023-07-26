import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadFilesMessage, fileLoadedMessage } from './messages'

export const FileUploader = () => {
	const [uploadMessage, setUploadMessage] = useState(uploadFilesMessage)

	const changeUploadMessage = () => {
		setUploadMessage(fileLoadedMessage)
	}

	const onDrop = useCallback((acceptedFiles: any[]) => {
		acceptedFiles.forEach((file: Blob) => {
			const reader = new FileReader()

			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				changeUploadMessage()
			}
			reader.readAsText(file)
		})
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div>
			<Typography variant='h6' style={{ marginBottom: '10px' }}>
				Para reutilizar a busca realizada no SIGAA:
			</Typography>
			<Container
				className='p-24 flex items-center bg-darkGrey w-120 h-96'
				{...getRootProps()}
				style={{
					borderRadius: '8px',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					transition: 'background-color 0.3s',
				}}
			>
				<input {...getInputProps()} />
				<Container
					className='p-3 text-justify justify-center hover:cursor-pointer items-center border-dashed border-2 border-darkGreen hover:bg-lightGrey'
					style={{
						borderRadius: '4px',
					}}
				>
					<Typography variant='body1'>{uploadMessage}</Typography>
				</Container>
			</Container>
		</div>
	)
}
