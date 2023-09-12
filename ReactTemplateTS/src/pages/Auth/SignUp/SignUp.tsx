import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { StyledLoadingButton } from '../../../components/Common/Styled/CommonStyled';
import FormikControl, { CONTROL_TYPE } from '../../../components/Formik/FormikControl';
import { useSignUp } from '../../../hooks/Auth/useAuth';
import { AuthBox, StyledStack, TitleText } from '../AuthStyled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Not a valid email address')
    .required('Username / Email Address is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_@.!%/*#`&+-]{8,}$/,
      'At least 8 characters with uppercase, lowercase and number.',
    ),
  checkbox: Yup.bool().oneOf([true]),
});

type LoginValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

const initialValues: LoginValues = {
  email: '',
  password: '',
  checkbox: false,
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: mutateSignUp, isLoading } = useSignUp();
  const onSubmit = (values: LoginValues) => {
    mutateSignUp({ ...values });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formikProps = { initialValues, validationSchema, onSubmit };

  return (
    <Formik {...formikProps}>
      {({ isValid, handleSubmit }) => (
        <Form>
          <Helmet>
            <title>Sign Up</title>
            <meta name="description" content="Page not found" />
          </Helmet>
          <AuthBox>
            <StyledStack>
              <TitleText>SIGN UP WITH EMAIL</TitleText>
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
                <FormikControl
                  control={CONTROL_TYPE.CHECK_BOX}
                  name="checkbox"
                  label="I accept the"
                  link={{
                    to: 'https://www.i-refer.app/terms-of-service',
                    text: 'Terms and Conditions',
                  }}
                />
              </Stack>
              <StyledLoadingButton
                loading={isLoading}
                variant="contained"
                disabled={!isValid}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Sign up
              </StyledLoadingButton>
            </StyledStack>
          </AuthBox>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
