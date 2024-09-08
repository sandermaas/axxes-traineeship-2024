import type { HTMLInputTypeAttribute, ReactElement } from 'react';

type InputProps = {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  label,
  name,
  type,
  value,
  onChange
}: InputProps): ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        className="border border-black border-solid"
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
