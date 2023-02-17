type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  level = 2,
  children,
  className,
}: HeadingProps): JSX.Element {
  const headingClasses = ["font-bold", "mb-4", "uppercase", className]
    .filter(Boolean)
    .join(" ");

  switch (level) {
    case 1:
      return (
        <h1 className={`${headingClasses} text-4xl`}>{children}</h1>
      );
    case 2:
      return (
        <h2 className={`${headingClasses} text-2xl`}>{children}</h2>
      );
    case 3:
      return (
        <h3 className={`${headingClasses} text-2xl text-blue-500`}>
          {children}
        </h3>
      );
    case 4:
      return <h4 className={headingClasses}>{children}</h4>;
    case 5:
      return <h5 className={headingClasses}>{children}</h5>;
    case 6:
      return <h6 className={headingClasses}>{children}</h6>;
    default:
      return <span>Invalid heading level</span>;
  }
}
