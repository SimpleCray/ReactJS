import React from 'react';
import { styled, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';
import commonConstants from '../../utils/commonConstants';
import moment from 'moment';

const Date = (props: any) => {
  const { name, label, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        const fieldValue =
          field?.value?.length === 10 &&
          moment(field.value, commonConstants.DATE_FORMAT['DD/MM/YYYY']).isValid()
            ? moment(field.value, commonConstants.DATE_FORMAT['DD/MM/YYYY']).toDate()
            : 'Invalid Date';
        return (
          <DatePicker
            label={label}
            inputFormat="dd/MM/yyyy"
            value={fieldValue}
            onChange={(newValue) => {
              const transformedValue = moment(newValue).isValid()
                ? moment(newValue).format(commonConstants.DATE_FORMAT['DD/MM/YYYY'])
                : newValue;
              form.setFieldValue(name, transformedValue);
            }}
            renderInput={(params) => (
              <TextField
                {...rest}
                {...params}
                error={Boolean(meta.error)}
                helperText={meta.touched && meta.error}
              />
            )}
          />
        );
      }}
    </Field>
  );
};

export default Date;
