import { Stack } from '@mui/material';
import OutputCard from '../OutputCard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LinkedInCandidateProfile from '../../linkedin-candidate-profile/LinkedInCandidateProfile'

export default function LinkedInCandidateProfilesCard({ body, handleCardClose, ...props }) {
	return (
		<>
			<OutputCard title={'Find Candidates'} titleIcon={<PersonOutlineOutlinedIcon />} isATSCard {...props} closeCard={() => handleCardClose(props)}>
				<Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
					<LinkedInCandidateProfile/>
				</Stack>
			</OutputCard>
		</>
	);
}
