import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
}

export const Button = ({ children, variant }: ButtonProps) => {
  // return <button className="button">{children}</button>;
  return <button className={`button ${variant}`}>{children}</button>;
};
