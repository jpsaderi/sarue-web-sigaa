import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export const FileUploader = () => {
	const onDrop = useCallback((acceptedFiles: any[]) => {
		acceptedFiles.forEach((file: Blob) => {
			const reader = new FileReader()

			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				// Do whatever you want with the fil    e contents
				const binaryStr = reader.result
				console.log(binaryStr)
			}
			reader.readAsArrayBuffer(file)
		})
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<Container
			className='p-24 flex items-center  bg-darkGrey w-96 h-96'
			{...getRootProps()}
		>
			<input {...getInputProps()} />
			<Container className=' p-3 text-jusitfy justify-center hover:cursor-pointer items-center border-dashed border-2 border-darkGreen  hover:bg-lightGrey'>
				<Typography variant='body1'>
					Arraste o arquivo aqui ou clique para abrir os arquivos selecionados
				</Typography>
			</Container>
		</Container>
	)
}
