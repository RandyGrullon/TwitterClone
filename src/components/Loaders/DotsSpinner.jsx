import { loader } from "./DotsSpinner.module.css";
import classNames from "classnames";

function DotsSpinner({ className }) {
  const spinnerClasses = classNames("inline-flex", className);

  return (
    <div className={spinnerClasses}>
      <span className={loader} />
    </div>
  );
}

export default DotsSpinner;
