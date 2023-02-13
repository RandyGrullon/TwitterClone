import classNames from "classnames";
import { loader, sm, md, lg } from "./CircularSpinner.module.css";

export default function CircularSpinner({ size, color }) {
  const loaderClasses = classNames(
    loader,
    {
      [sm]: size === "sm",
      [md]: size === "md" || !size,
      [lg]: size === "lg",
    },
    {
      ["border-t-dark border-l-dark border-r-dark"]: !color || color === "dark",
      ["border-t-white border-l-white border-r-white"]:
        color && color === "white",
      // ["border-color-white"]: color === "white"
    }
  );

  return <span className={loaderClasses} />;
}
