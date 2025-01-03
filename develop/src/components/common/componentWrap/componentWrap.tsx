import * as A from "./componentWrap.styles"

interface ILayoutProps {
    children: JSX.Element;
}
export default function ComponentWrap(props: ILayoutProps):JSX.Element {


  return (
    <>
      <A.componentWrap>{props.children}</A.componentWrap>
    </>
  )

}