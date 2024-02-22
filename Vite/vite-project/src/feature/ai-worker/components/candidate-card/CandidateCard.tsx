import React from 'react';
import { CandidateCard } from './CandidateCardStyles';
import { Typography, TextField, Stack, Button, IconButton, Popper, Fade, Paper, Avatar, ImageList, ImageListItem, Checkbox, Tooltip } from '@mui/material';
import avatar from '../../../../assets/icons/avatar.svg';

type CandidateCardProps = {
	candidate: any;
	onclick: (e: React.MouseEvent<HTMLElement>) => void;
};

const LinkedInCandidateCard = (props: CandidateCardProps) => {
	const { candidate, onclick } = props;

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(event.target.value)
	// }

	return (
		<>
			<CandidateCard>
				<Avatar alt={candidate.first_name} src={candidate?.profile_url ? candidate?.profile_url : (avatar as unknown as string)} sx={{ width: 80, height: 80 }} />

				<Typography variant='h6' sx={{ alignSelf: 'start' }} height={41}>
					{candidate.first_name} {candidate.last_name}
				</Typography>

				<Stack sx={{ width: '160px' }} alignSelf={'start'} height={45}>
					<Tooltip title={candidate.occupation} placement="bottom">
						<Typography variant='body2' noWrap>
							{candidate.occupation}
						</Typography>
					</Tooltip>

					<Typography variant='body2' mt={0.5} fontWeight={'600'}>
						{candidate.city ? candidate.city : <span></span>}
					</Typography>
				</Stack>

				<Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
					<>{/* <Checkbox onChange={handleChange}/> */}</>

					<Button variant='contained' color='primary' size='small' onClick={onclick}>
						View
					</Button>
				</Stack>
			</CandidateCard>
		</>
	);
};

export default LinkedInCandidateCard;
