import Head from 'next/head'
import {Fragment} from 'react'
import Content from "../components/content";
import Target from '../components/target';
import Btn from '../components/resources/button';
import styled from 'styled-components';
import NextIcon from '../components/resources/svg/next'
import PrevIcon from '../components/resources/svg/previous'
const buttonStyle = `
    background: green;
    width: 100px;
    `
function Home() {
    
  return (
    <Fragment>
        <Head>
            <title>Inicio</title>
        </Head>
        <Content>
        <Btn desc={<PrevIcon/>} width="60px" height="60px" radius="60px"/>
            <Target>
                Bienvenido
            </Target>
            <Btn desc={<NextIcon/>} width="60px" height="60px" radius="60px"/>
        </Content>
    </Fragment>
  );
}
export default Home;
