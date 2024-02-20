import CheckBox from './Checkbox';
import Date from './Date';
import Input from './Input';
import Phone from './Phone';
import Select from './Select';
import Textarea from './Textarea';
import RadioGroup from './RadioGroup';

export const CONTROL_TYPE = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
  CHECK_BOX: 'checkbox',
  SELECT: 'select',
  DATE: 'date',
  PHONE: 'phone',
  NUMBER_FORMAT_INPUT: 'numberFormatInput',
  RADIO_GROUP: 'radio_group',
};

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case CONTROL_TYPE.INPUT:
      return <Input {...rest} />;
    case CONTROL_TYPE.SELECT:
      return <Select {...rest} />;
    case CONTROL_TYPE.DATE:
      return <Date {...rest} />;
    case CONTROL_TYPE.TEXTAREA:
      return <Textarea {...rest} />;
    case CONTROL_TYPE.CHECK_BOX:
      return <CheckBox {...rest} />;
    case CONTROL_TYPE.PHONE:
      return <Phone {...rest} />;
    case CONTROL_TYPE.RADIO_GROUP:
      return <RadioGroup {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
