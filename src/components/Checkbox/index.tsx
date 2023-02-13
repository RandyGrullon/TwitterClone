import { forwardRef } from "react";

import styles from "./Checkbox.module.css";

interface Checkbox {
  id: string;
  label: string;
  checkboxClassName?: string;
  onChange?: (checked: boolean, id: string, name: string) => void;
  checked?: boolean;
  required?: boolean;
  name: string;

  ref?: any;
}

const Checkbox = ({
  id,
  label,
  checkboxClassName,
  onChange,
  checked,
  required,
  name,
  ref,
}: Checkbox) => {
  const containerClasses = (
    checkboxClassName ? checkboxClassName : ""
  );

  return (
    <div className={containerClasses}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className={styles.checkboxInput}
        onChange={({ target }) =>
          onChange ? onChange(target.checked, target.id, target.name) : () => {}
        }
        required={required}
        checked={checked}
        ref={ref}
      />
      <label htmlFor={id} className="flex mr-2">
        <span className={styles.checkbox}></span>
      </label>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Checkbox);
