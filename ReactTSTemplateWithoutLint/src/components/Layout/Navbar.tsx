import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { COLOR } from '../../theme';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import UserPopover from '../Common/UserPopover/UserPopover';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const navItems = ['Home', 'About', 'Contact'];

const StyledAppBar = styled(AppBar)({
  backgroundColor: COLOR.black,
});

export default function DrawerAppBar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: 'flex', marginBottom: 20 }}>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Project name
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            {isAuthenticated && (
              <IconButton
                sx={{ color: 'white' }}
                aria-label="user"
                component="label"
                onClick={handleProfileClick}
              >
                <PersonIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
        <UserPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </StyledAppBar>
    </Box>
  );
}
