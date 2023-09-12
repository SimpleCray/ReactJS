import React from 'react';
import { styled, TextField } from '@mui/material';
import { Field } from 'formik';

const Textarea = (props: any) => {
  const { label, name, maxLength, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <TextField
            multiline
            fullWidth
            {...field}
            {...rest}
            label={label}
            inputProps={{
              onBlur: form.handleBlur,
              maxLength,
            }}
            error={Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        );
      }}
    </Field>
  );
};

export default Textarea;
