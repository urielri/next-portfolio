import Link from "next/link";
import { ButtonLink } from "./resources/button";
import Button from "./resources/button";
import styled from "styled-components";
import HomeIcon from "./resources/svg/home";
import AboutIcon from "./resources/svg/about";
import ContactIcon from "./resources/svg/contact";
import FeedbackIcon from "./resources/svg/feedback";
import PortfolioIcon from "./resources/svg/portfolio";
import SettingsIcon from "./resources/svg/settings";
import { useEffect, useState } from "react";
import { useTema, tema, useChangeTema } from "./context";
import Claro from "./resources/svg/claro";
import Oscuro from "./resources/svg/oscuro";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  height: 70px;
  align-self: flex-end;
  width: 80%;
  background: ${(props) => props.background || "white"};
  border-radius: 60px;
  box-shadow: 0px 2px 5px rgba(100, 100, 100, 0.3);
  padding: 0 60px;

  svg {
    fill: #0074ff;
    width: 30px;
    height: 30px;
  }
  .settings {
    position: relative;
    background: green;
    display: flex;
    width: 250px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .extends {
    height: 200px;
    top: -220px;
    visibility: visible;
    padding: 20px 0;
    button {
      opacity: 1;
    }
  }
`;
const MenuExtend = styled.div`
  width: 60px;
  display: flex;
  background: #fff;
  flex-direction: column;
  border-radius: 60px;
  position: absolute;
  top: -20px;
  z-index: 1;
  height: 0;
  box-shadow: 0px 2px 5px rgba(100, 100, 100, 0.3);
  transition: all 0.5s;

  visibility: hidden;
  button {
    transition-delay: 0.2s;
    opacity: 0;
  }
`;
const Option = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  align-items: center;
`;
function Menu(props: any) {
  const [menu, setMenu] = useState(false);
  const [tem, setTem] = useState(true);
  const currentT = useTema();

  const handleClick = () => {
    setMenu(() => (menu ? false : true));
  };
  const handleTema = () => {
    setTem((tem) => {
      return (tem ? false : true);
    });

    console.log(tem);
    if (tem) {
      props.changeTema(tema.oscuro);
    } else {
      props.changeTema(tema.claro);
    }
  };

  return (
    <>
      <Div background={currentT.background}>
        <Option>
          <Link href="/">
            <ButtonLink desc={<HomeIcon />} />
          </Link>
        </Option>
        <Option>
          <Link href="/feedback">
            <ButtonLink desc={<FeedbackIcon />} />
          </Link>
        </Option>

        <Option>
          <Link href="/portfolio">
            <ButtonLink desc={<PortfolioIcon />} />
          </Link>
        </Option>
        <Option>
          <Link href="/contact">
            <ButtonLink desc={<ContactIcon />} />
          </Link>
        </Option>
        <Option>
          <Link href="/about">
            <ButtonLink desc={<AboutIcon />} />
          </Link>
        </Option>
        <Option>
          <ButtonLink desc={<SettingsIcon />} onClick={handleClick} />
          <MenuExtend className={menu ? "extends" : null}></MenuExtend>
        </Option>
        <Button
          desc={tem ? <Claro /> : <Oscuro />}
          onClick={handleTema}
          colorFill="#0074ff"
          bg="none"
          noShadow
        />
        <div onClick={handleTema}>asdasd</div>
      </Div>
    </>
  );
}
export default Menu;
