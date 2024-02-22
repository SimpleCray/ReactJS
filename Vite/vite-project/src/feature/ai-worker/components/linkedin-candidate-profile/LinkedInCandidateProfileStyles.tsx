import { styled } from '@mui/material/styles';
import { Card, ImageList } from '@mui/material';

export const StyledProgressBar = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),
}));

export const CandidateCard = styled(Card)(({ theme }) => ({
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    height: '100%',
    borderRadius: 8,
    boxShadow: 'box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);',
}));

export const StyledImageList = styled(ImageList)(({ theme }) => ({
    borderTop: '16px solid #21054C',
    borderRadius: 8
}));