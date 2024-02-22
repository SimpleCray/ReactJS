import { Stack, Box, Typography } from '@mui/material';
import Contact from './Contact';
import { StyledSwitch } from '../table-card';

const Details = ({
  contact,
  email,
  phone,
  summary,
  showSummary,
  showContact,
  showContactBox,
  active,
  handleToggleActive,
}) => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Stack gap={3} direction='row' alignItems='center'>
          <Box display='flex' alignItems='center' justifyContent='space-between' width={110}>
            <Typography variant='body1' fontWeight={600} component='span'>
              Active 2
            </Typography>
            <StyledSwitch checked={active} onChange={() => handleToggleActive(active ? 2 : 1)} />
          </Box>
          <Box flex={3}>
            {contact && showContact && (
              <Box>
                <Typography variant='body1' fontWeight={600}>
                  {contact}
                </Typography>
              </Box>
            )}
            {email && (
              <Box>
                <Typography variant='body1' fontWeight={600} component='span'>
                  Email:&nbsp;
                </Typography>
                <Typography
                  sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
                  onClick={() => {
                    window.open(`mailto:${email}`);
                    return;
                  }}
                  component='span'
                  variant='body1'
                  color={(theme) => theme.palette.primary.light}
                >
                  {email}
                </Typography>
              </Box>
            )}
            {phone && (
              <Box>
                <Typography variant='body1' fontWeight={600} component='span'>
                  Phone:&nbsp;
                </Typography>
                <Typography
                  sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
                  onClick={() => {
                    window.open(`tel:${phone}`);
                    return;
                  }}
                  component='span'
                  variant='body1'
                  color={(theme) => theme.palette.primary.light}
                >
                  {phone}
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>

        {showContactBox && <Contact title='Contact' email={email} phone={phone} />}
      </Stack>
      {summary && showSummary && <>{summary}</>}
    </>
  );
};

export default Details;
