export interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  title?: string;
  err?: string;
  views?: number;
}

export interface HeadTitleProps {
  title?: string;
  margin?: 1 | 2 | 3;
  el: 'h1' | 'h2' | 'h3';
}

export interface IForm {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  title: string;
  to: string;
  formMore?: any | any[];
}
