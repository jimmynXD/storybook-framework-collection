import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The kind of button to render
   */
  kind?: "primary" | "secondary";
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * The class name to apply to the parent of the button
   */
  className?: string;
}

export function Button(props: ButtonProps) {
  const { children, kind, className, ...rest } = props;

  const classes = [className, kind ?? "primary"];

  return (
    <button className={classes.filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}
