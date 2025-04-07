import React from 'react';
import { styled, InputAdornment } from '@mui/material';
import { Field } from 'formik';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { MuiTelInput } from 'mui-tel-input';
import { COLOR } from '../../theme';

const Phone = (props: any) => {
  const { name, label, maxLength, displayCheck, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <MuiTelInput
            fullWidth
            {...field}
            label={label}
            inputProps={{
              onBlur: form.handleBlur,
              maxLength,
            }}
            onChange={(value: any, info: any) => form.setFieldValue(name, value)}
            defaultCountry="AU"
            error={Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            InputProps={{
              endAdornment:
                !!displayCheck && meta.touched && !meta.error ? (
                  <InputAdornment position="end">
                    <CheckCircleRoundedIcon style={{ color: COLOR.green }} />
                  </InputAdornment>
                ) : null,
            }}
            {...rest}
          />
        );
      }}
    </Field>
  );
};

export default Phone;
