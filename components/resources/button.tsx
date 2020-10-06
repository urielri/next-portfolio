import React, { Fragment } from "react";
import styled from "styled-components";

function Button({onClick,desc, radius, height, width, colorFill, bg, noShadow} ) {
  const common = `
background: ${bg ? bg : '#fff'};
box-shadow:  ${noShadow ? 'none ' : '0px 0px 2px rgba(50, 50, 50, 0.15)'};
color: #606060;
outline: none;
height: 100px;
border: none;
width: 100%;
height: 100%;
padding: 0 10px;
font-size: 1rem;
border-radius: ${radius ? radius : "10px"};
cursor: pointer;
transition: all 0.3s 0s ease-in-out;
 :hover{
  box-shadow:  ${noShadow ? 'none' : '0px 0px 10px rgba(100, 100, 100, 0.25)'};

 }
 
`;
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-self: center;
    height: ${height ? height : "45px"};
    width: ${width ? width : "auto"};
    svg{
      fill: ${colorFill ? colorFill : '#606060'};
      width: 20px;
      height: 20px;
    }
  `;
  const ButtonStyle = styled.button`
    ${common}
  `;
  return (
    <Div>
      <ButtonStyle onClick={onClick}>
        <span className="span">{desc}</span>
      </ButtonStyle>
    </Div>
  );
}
export default Button;

const DivLink = styled.div`
  max-width: 250px;
  width: auto;
  height: 45px;
  justify-content: center;
  display: flex;
  z-index: 11;
  .button {
    background: none;

    color: #0074ff;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 1.5rem;
  }
`;
export const ButtonLink = React.forwardRef(
  ({ onClick, href, desc }: any, ref: any) => {
    return (
      <DivLink className="div">
        <button onClick={onClick} ref={ref} className="button">
          <a href={href}>
            <span className="span">{desc}</span>
          </a>
        </button>
      </DivLink>
    );
  }
);
