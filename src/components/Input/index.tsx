import BasicInput from "./Basic";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange: (value: string, name: string, id: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  register?: any;
  registerOptions?: any;
  autoComplete?: string;
  required?: boolean;
  layout?: "basic";
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  onChange,
  onFocus,
  onBlur,
  value,
  register,
  registerOptions,
  autoComplete,
  required,
  layout,
}: InputProps) => {
  switch (layout) {
    case "basic":
      return (
        <BasicInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          inputClassName={inputClassName}
          label={label}
          labelClassName={labelClassName}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          containerClassName={containerClassName}
          value={value}
          register={register}
          registerOptions={registerOptions}
          autoComplete={autoComplete}
          required={required}
        />
      );

    default:
      return null;
  }
};

export default Input;
