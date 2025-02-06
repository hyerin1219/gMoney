import * as A from "./styles";

interface ILayoutProps {
  children: JSX.Element;
}

export default function ComponentWrap(props: ILayoutProps): JSX.Element {
  return <A.ComponentWrap>{props.children}</A.ComponentWrap>;
}
