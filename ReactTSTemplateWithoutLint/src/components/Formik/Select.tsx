import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Field } from 'formik';

const Input = (props: any) => {
  const { name, label, disabled, options, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <FormControl
            disabled={disabled}
            fullWidth
            sx={{ minWidth: 120 }}
            error={Boolean(meta.error)}
          >
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              id={name}
              {...field}
              {...rest}
              value={field.value || ''}
              sx={{ borderRadius: '8px' }}
              labelId={name}
              name={name}
              inputProps={{
                onBlur: form.handleBlur,
              }}
              label={label}
              variant="outlined"
            >
              {options.map((type: any) => (
                <MenuItem key={type.label} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default Input;
