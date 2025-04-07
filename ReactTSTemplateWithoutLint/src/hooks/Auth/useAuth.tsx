import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ToastMessage, { ToastType } from '../../components/Common/ToastMessage/ToastMessage';
import { login } from '../../redux/slices/authSlice';
import axiosInstance from '../../utils/axios.utils';
import endPointAPI from '../../utils/endPointAPI';

export type UpdateUserInfoPayload = any;

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation(
    async (payload: { email: string; password: string }) => {
      return await axiosInstance.post(endPointAPI.AUTH.LOGIN, payload);
    },
    {
      onSuccess: (response: any) => {
        toast(<ToastMessage text="Successfully Signed in" type={ToastType.SUCCESS.type} />);
        dispatch(login(response?.data));
      },
    },
  );
};

type SignUpPayload = {
  email: string;
  password: string;
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation(
    async (payload: SignUpPayload) => {
      const { email, password } = payload;
      // TODO: post request to signup API
    },
    {
      onSuccess: (_data: any, payload: SignUpPayload) => {
        navigate('/login');
        toast(
          <ToastMessage
            text="Successfully Signed Up. Please Confirm your Email"
            type={ToastType.SUCCESS.type}
          />,
        );
      },
    },
  );
};
