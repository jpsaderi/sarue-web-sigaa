import React from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'

const CustomListItem = (props: { text: string; linkRoute: string }) => {
	return (
		<ListItem>
			<ListItemButton className='hover:bg-lightGrey'>
				<ListItemText>{props.text}</ListItemText>
				<Link href={props.linkRoute}></Link>
			</ListItemButton>
		</ListItem>
	)
}

export default CustomListItem
