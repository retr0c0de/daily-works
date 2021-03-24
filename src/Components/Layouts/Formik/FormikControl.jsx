import Input from './Elements/Input'
import Radio from './Elements/Radio'
import Select from './Elements/Select'
import Textarea from './Elements/Textarea'
import DatePicker from './Elements/DatePicker'
import CheckboxGroup from './Elements/CheckboxGroup'

function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    // case 'chakrainput':
    //   return <ChakraInput {...rest} />
    default:
      return null
  }
}

export default FormikControl
