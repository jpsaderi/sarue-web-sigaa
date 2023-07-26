import React from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'

const CustomListItem = (props: { text: string; linkRoute: string }) => {
	return (
		<Link href={props.linkRoute}>
			<ListItem>
				<ListItemButton className='hover:bg-lightGrey'>
					<ListItemText>{props.text}</ListItemText>
				</ListItemButton>
			</ListItem>
		</Link>
	)
}

export default CustomListItem
