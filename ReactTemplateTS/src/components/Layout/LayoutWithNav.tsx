import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { StyledBackground } from '../Common/Styled/CommonStyled';
import Navbar from './Navbar';

export const LayoutWithNav = () => {
  return (
    <StyledBackground>
      <Navbar />
      <Container maxWidth={false} sx={{ padding: '0px !important' }}>
        <Box display="flex" justifyContent={'center'} mt="100px">
          <Outlet />
        </Box>
      </Container>
    </StyledBackground>
  );
};
