import Styled_Input from './Input.style';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <Styled_Input.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
