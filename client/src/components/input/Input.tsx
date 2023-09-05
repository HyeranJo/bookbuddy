import Styled_Input from './Input.style';

interface InputProps {
  type: string;
  name?: string;
  placeholder?: string;
  value: string;
  width?: number;
  height?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: any;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  width,
  height,
  onChange,
  readOnly,
}: InputProps) => {
  return (
    <Styled_Input.Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      width={width}
      height={height}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default Input;
