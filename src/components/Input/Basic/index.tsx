import classes from "./BasicInput.module.css";

interface BasicInputProps {
  id: string;
  type?: string;
  value: string;
  placeholder?: string;
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string, name: string, id: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register?: any;
  registerOptions?: any;
  autoComplete?: string;
}

const BasicInput = ({
  id,
  type,
  value,
  placeholder,
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  name,
  required,
  disabled,
  onChange,
  onFocus,
  onBlur,
  register,
  registerOptions,
  autoComplete,
}: BasicInputProps) => {

  const inputClass = (classes.input, inputClassName);
  const labelClass = (classes.label, labelClassName);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const id = e.target.id;
    const value = e.target.value;
    onChange(value, name, id);
  };

  // prevent form submission when 'enter' is pressed
  const cancelDefaultBehavior = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className={containerClassName || ""}>
      {label && (
        <>
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
          {required && value.trim() === "" && (
            <span className="text-red-500">*</span>
          )}
        </>
      )}
      {!register ? (
        <input
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder || ""}
          className={inputClass}
          onChange={changeHandler}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete || "on"}
          onKeyDown={cancelDefaultBehavior}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder || ""}
          className={inputClass}
          onChange={changeHandler}
          // value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          {...register(name, registerOptions)}
        />
      )}
    </div>
  );
};

export default BasicInput;
