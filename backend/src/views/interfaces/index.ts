export interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  title?: string;
  isAdmin?: boolean;
  err?: string;
}

export interface HeadTitleProps {
  title?: string;
  margin?: 1 | 2 | 3;
  el: 'h1' | 'h2' | 'h3';
}
