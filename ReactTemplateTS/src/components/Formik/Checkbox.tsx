import { Checkbox, Stack, Typography } from '@mui/material';
import { Field } from 'formik';

const CheckBox = (props: any) => {
  const { name, label, link, ...rest } = props;
  return (
    <Field type="checkbox" name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <Stack flexDirection={'row'} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Checkbox
              sx={{ padding: '0 9px 0 0' }}
              {...field}
              {...rest}
              name={name}
              checked={field.value || false}
            />
            <Typography sx={{ textAlign: 'left' }}>
              {label}{' '}
              {link ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  {link.text}
                </a>
              ) : null}
            </Typography>
          </Stack>
        );
      }}
    </Field>
  );
};

export default CheckBox;
