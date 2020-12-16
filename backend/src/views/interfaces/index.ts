export interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  title?: string;
  isAdmin?: boolean;
  err?: string;
}
