import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { InputAdornment, TextField } from '@mui/material';
import { Field } from 'formik';
import { COLOR } from '../../theme';

const Input = (props: any) => {
  const { name, label, maxLength, displayCheck, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <TextField
            fullWidth
            {...field}
            label={label}
            inputProps={{
              onBlur: form.handleBlur,
              maxLength,
            }}
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

export default Input;
