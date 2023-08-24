import Styled_Input from './Input.style';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  width?: number;
  height?: number;
  onChange: () => void;
}

const Input = ({
  type,
  placeholder,
  value,
  width,
  height,
  onChange,
}: InputProps) => {
  return (
    <Styled_Input.Input
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
      height={height}
      onChange={onChange}
    />
  );
};

export default Input;
