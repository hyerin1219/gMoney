import styled from "@emotion/styled"

interface SubMenuProps {
  isopen: boolean;
}

export const NavigationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5%;
`
export const NavigationButton = styled.button`
  font-size: 25px;
  font-weight: bold;
  
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 5px;
    background-color: #d2e4c1;
    border-radius: 5px;
    transition: all 0.3;
    
  }
  :hover::after {
    animation: hoverAni 0.6s forwards;


    @keyframes hoverAni {
      0% {width: 0;}
      100% {width: 100%;}
    }
  }

  pointer-events: ${(props: IsActiveTypes) => props.isActive ? "true" : "none"};
`

export const MenuWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const SubMenuWrap = styled.ul`
  position: absolute;
  top: 55px;

  opacity: ${(props:SubMenuProps) => props.isopen ? 1 : 0};
  pointer-events: ${(props:SubMenuProps) => props.isopen ? "all" : "none"};

  font-weight: bold;
  transition: all;
  background-color: #d2e4c1;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
`
export const subMenuList = styled.li`
  margin: 0.6em 0;
  cursor: pointer;

  ::marker {
    display: none;
    font-size: 0;
    opacity: 0;
  }

  :hover {
    color: #83b871;
  }

`

export interface IsActiveTypes {
    isActive: boolean
}