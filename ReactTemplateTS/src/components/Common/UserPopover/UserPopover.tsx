import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from '../../../redux/slices/authSlice';
import { RootState } from '../../../redux/store';
import { StyledLoadingButton } from '../Styled/CommonStyled';
import ToastMessage, { ToastType } from '../ToastMessage/ToastMessage';
import { ClosePopover, PopoverContainer, UserPopper } from './UserPopperStyled';

type UserPopoverPropsType = {
  anchorEl: HTMLAnchorElement | null;
  setAnchorEl: Function;
};

const UserPopover = ({ anchorEl, setAnchorEl }: UserPopoverPropsType) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLogout = () => {
    handleClose();
    dispatch(logout());
    toast(<ToastMessage text="Logged out!" type={ToastType.SUCCESS.type} />);
  };
  return (
    <UserPopper
      id={id}
      open={open}
      anchorEl={anchorEl}
      sx={{
        zIndex: 10000,
        background: 'white',
        boxShadow:
          'rgb(0, 0, 0, 0.2) 0px 5px 5px -3px, rgb(0, 0, 0, 0.14) 0px 8px 10px 1px, rgb(0, 0, 0, 0.12) 0px 3px 14px 2px',
      }}
    >
      <PopoverContainer>
        <ClosePopover onClick={handleClose}>
          <CloseIcon />
        </ClosePopover>
        <Stack gap={2}>
          <Typography variant="h6">{user?.username}</Typography>
          <Typography variant="body1">
            Hubspot state: <strong>{user?.email}</strong>
          </Typography>
          <StyledLoadingButton onClick={onLogout}>Logout</StyledLoadingButton>
        </Stack>
      </PopoverContainer>
    </UserPopper>
  );
};

export default UserPopover;
