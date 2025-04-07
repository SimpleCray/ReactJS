import { Box, Checkbox, Stack, styled, Typography } from '@mui/material';
import { Field, useField } from 'formik';
import { COLOR } from '../../theme';
import { RadioGroupContainer } from '../Common/Styled/CommonStyled';

const UncheckIcon = styled('span')({
  borderRadius: '6px',
  width: '18px',
  height: '18px',
  border: '2px solid #CED4DA',
  'input:disabled ~ &': {
    background: COLOR.gray,
  },
});

const CheckedIcon = styled(UncheckIcon)({
  background: 'linear-gradient(81.05deg, #FCE300 9.89%, #2CCCD3 99.52%)',
  border: 'none',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    // eslint-disable-next-line quotes
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='11' height='9' viewBox='0 0 11 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5L4 7L9.5 1' stroke='white' stroke-width='2.01011'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '70% 70%',
    content: '""',
  },
});

const ErrorMessage = styled(Typography)({
  color: COLOR.red,
  fontSize: '0.75rem',
  lineHeight: '1.66',
  margin: '3px 14px 0 14px',
});

const YES_NO_OPTION = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' },
];

const RadioGroup = (props: any) => {
  const { name, label, options, isSingleChoice, isYesNo, ...rest } = props;
  const myField = useField(name);

  const onClickButton = (fieldValue: Array<string>, currentValue: string) => {
    if (isSingleChoice || isYesNo) {
      myField[2].setValue(currentValue);
    } else {
      if (!fieldValue.includes(currentValue)) {
        myField[2].setValue([...fieldValue, currentValue]);
      } else {
        myField[2].setValue(fieldValue.filter((item) => item !== currentValue));
      }
    }
  };

  // @ts-ignore
  const RadioContainer = ({ children, isYesNo, meta }) => {
    return isYesNo ? (
      <Box>{children}</Box>
    ) : (
      <RadioGroupContainer
        sx={{ border: isYesNo ? 'none' : `1px solid ${meta.error ? COLOR.red : COLOR.whiteSmoke}` }}
      >
        {children}
      </RadioGroupContainer>
    );
  };

  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <Box>
            <RadioContainer isYesNo={isYesNo} meta={meta}>
              <Typography>{label}</Typography>
              <Stack sx={{ alignItems: 'flex-start' }} gap={1.5}>
                {isYesNo
                  ? YES_NO_OPTION.map((type: any) => (
                      <Typography key={type.value}>
                        <Checkbox
                          sx={{ marginLeft: '-9px' }}
                          icon={<UncheckIcon />}
                          checkedIcon={<CheckedIcon />}
                          key={type.label}
                          checked={field.value === type.value}
                          onClick={() => onClickButton(field.value || [], type.value)}
                        />
                        {type.label}
                      </Typography>
                    ))
                  : options.map((type: any) => (
                      <Typography key={type.value}>
                        <Checkbox
                          sx={{ marginLeft: '-9px' }}
                          icon={<UncheckIcon />}
                          checkedIcon={<CheckedIcon />}
                          key={type.label}
                          checked={
                            isSingleChoice
                              ? field.value === type.value
                              : field.value?.includes(type.value)
                          }
                          onClick={() => onClickButton(field.value || [], type.value)}
                        />
                        {type.label}
                      </Typography>
                    ))}
              </Stack>
            </RadioContainer>
            {meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
          </Box>
        );
      }}
    </Field>
  );
};

export default RadioGroup;
