import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledLoadingButton } from '../../../components/Common/Styled/CommonStyled';
import FormikControl, { CONTROL_TYPE } from '../../../components/Formik/FormikControl';
import { useLogin } from '../../../hooks/Auth/useAuth';
import { RootState } from '../../../redux/store';
import { AuthBox, StyledStack, Subtext, SubtextLink, TitleText } from '../AuthStyled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Not a valid email address')
    .required('Username / Email Address is required'),
  password: Yup.string().required('Password is required'),
});

type LoginValues = {
  email: string;
  password: string;
};

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useSelector((state: RootState) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: mutateLogin, isLoading } = useLogin();
  const onSubmit = (values: LoginValues) => {
    mutateLogin(values);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const redirectUrl = location.state?.from?.pathname || '/list-your-business';
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectUrl, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectUrl]);
  const formikProps = { initialValues, validationSchema, onSubmit };

  return (
    <Formik {...formikProps}>
      {({ isValid, handleSubmit }) => (
        <Form>
          <Helmet>
            <title>Sign In</title>
            <meta name="description" content="Page not found" />
          </Helmet>
          <AuthBox>
            <StyledStack>
              <TitleText>SIGN IN</TitleText>
              <Stack mt="25px" mb="16px" gap={3}>
                <FormikControl
                  control={CONTROL_TYPE.INPUT}
                  name="email"
                  label="Username / Email Address"
                  placeholder="Enter your email"
                  InputLabelProps={{ shrink: true }}
                />
                <FormikControl
                  control={CONTROL_TYPE.INPUT}
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prevState) => !prevState)}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>
              <StyledLoadingButton
                loading={isLoading}
                variant="contained"
                disabled={!isValid}
                onClick={() => {
                  handleSubmit();
                }}
                sx={{
                  marginBottom: '1.2rem',
                  bottom: '0',
                }}
              >
                Sign in
              </StyledLoadingButton>
              <Subtext>
                Not registered?{' '}
                <SubtextLink as="span" onClick={() => navigate(`/sign-up/${userType}`)}>
                  Sign up now
                </SubtextLink>
              </Subtext>
            </StyledStack>
          </AuthBox>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
