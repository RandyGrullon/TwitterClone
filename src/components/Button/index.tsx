import { useRouter } from "next/router";

interface Button {
  children: any;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  to,
  type,
  disabled,
}: Button) {
  const { push } = useRouter();

  const btnClasses = className ? className : "";

  const navigate = () => {
    push(to?.startsWith("/") ? to : `/${to}`);
  };

  const handleClick = to ? navigate : onClick;

  return (
    <button
      className={btnClasses}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
