import React, { ReactNode, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContentProps } from 'react-toastify';
import { AlertBox, AlertText, CloseButton } from './ToastMessageStyled';
import { COLOR } from '../../../theme';

export const ToastType = {
  SUCCESS: {
    type: 'SUCCESS',
    styled: {
      color: COLOR.white,
      backgroundColor: COLOR.black,
    },
  },
  ERROR: {
    type: 'ERROR',
    styled: {
      color: COLOR.white,
      backgroundColor: COLOR.black,
    },
  },
  WARNING: {
    type: 'WARNING',
    styled: {
      color: COLOR.white,
      backgroundColor: COLOR.black,
    },
  },
};

type ToastMessageProps = {
  type: string;
  text: string | ReactNode;
};

const ToastMessage = ({
  closeToast,
  toastProps,
  type = ToastType.SUCCESS.type,
  text,
}: Partial<ToastContentProps & ToastMessageProps>) => {
  // @ts-ignore
  const styled = ToastType[type]?.styled ?? ToastType.SUCCESS.styled;
  useEffect(() => {
    // @ts-ignore
    setTimeout(() => closeToast(), 5000);
  });
  return (
    <AlertBox sx={styled}>
      <AlertText>{text}</AlertText>
      <CloseButton onClick={closeToast}>
        <CloseIcon style={{ color: COLOR.white, fontSize: '20px' }} />
      </CloseButton>
    </AlertBox>
  );
};

export default ToastMessage;
