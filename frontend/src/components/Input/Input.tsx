import "./style.scss";

interface IInputProps {
  labelText?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  labelText = "",
  placeholder = "",
  onChange,
  value,
}: IInputProps) => {
  return (
    <div className="input__wrapper">
      <span className="input__label">{labelText}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
