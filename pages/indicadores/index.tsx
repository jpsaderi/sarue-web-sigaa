import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import React, { PureComponent } from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const data = [
	{
		ano: '2020',
		total_acoes: 4000,
	},
	{
		ano: '2021',
		total_acoes: 3000,
	},
	{
		ano: '2022',
		total_acoes: 2000,
	},
	{
		ano: '2023',
		total_acoes: 2780,
	},
	{
		ano: '2024',
		total_acoes: 1890,
	},
]
const handleChipClick = () => {}
export default function Indicadores() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			height='100vh'
			style={{ overflow: 'visible' }}
		>
			<Box>
				<Typography textAlign='center' fontSize='42px'>
					Indicadores
				</Typography>
				<Box>
					<Typography marginTop='10px' textAlign='center' fontSize='42px'>
						Total de ações de extensāo ano a ano
					</Typography>
				</Box>
				<ResponsiveContainer width='60%' height='60%'>
					<LineChart
						width={20}
						height={30}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='ano' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='total_acoes' stroke='#8884d8' />
						<Legend />
					</LineChart>
				</ResponsiveContainer>
				<Box
					width='100%'
					display='flex'
					flexDirection='row'
					justify-content='space-between'
				>
					<Typography textAlign='center' paddingRight={'300px'} fontSize='16px'>
						Total de ações de em 2020: 1000
					</Typography>
					<Chip
						label='Todos os anos'
						variant='outlined'
						onClick={handleChipClick}
					/>
					<Chip label='2020' variant='outlined' onClick={handleChipClick} />
					<Chip label='2021' variant='outlined' onClick={handleChipClick} />
					<Chip label='2022' variant='outlined' onClick={handleChipClick} />
					<Chip label='2023' variant='outlined' onClick={handleChipClick} />
					<Chip label='2024' variant='outlined' onClick={handleChipClick} />
				</Box>
			</Box>
			<Box
				width='500px'
				height='100px'
				marginTop='10px'
				sx={{ color: '#fff' }}
				className='bg-darkGrey'
				alignItems='center'
				padding='10px'
			>
				<Typography textAlign='center' sx={{ color: '#fff' }}>
					"Sobre este indicador: Ele indica o total de ações de extensão por
					ano."
				</Typography>
			</Box>
		</Box>
	)
}
