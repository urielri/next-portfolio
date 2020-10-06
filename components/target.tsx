import { Fragment } from "react";
import styled from "styled-components";
function Target(props: any) {
  const Target = styled.div`
    justify-self: center;
    max-width: 950px;
    width: 800px;
    height: 500px;
    max-height: 550px;
    box-shadow: 0px 0px 2px rgba(45, 45, 45, 0.25);
    border-radius: 20px;
    padding: 40px;
  `;

  return <Target>{props.children}</Target>;
}
export default Target;
