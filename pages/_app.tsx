import '../styles/global.scss'
import {Fragment, useState} from 'react'
import Menu from '../components/menu'
import Container from '../components/container'
import {tema, TemaProvider} from '../components/context'
export default function App ({Component, pageProps}){
        const [tem,useTem] = useState(tema.claro);

    return(
     <TemaProvider value={tem}>
           <Container>
           <Component {...pageProps} />

            <Menu changeTema={useTem} />
       </Container>
     </TemaProvider>

    )
}