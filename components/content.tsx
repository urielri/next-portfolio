import styled from 'styled-components'
function Content (props: any) {
    const DivContent = styled.div   `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 100% / minmax(120px, 250px) auto minmax(120px, 250px);
    align-items: center;
    
    `
    return(
        <DivContent>
            {props.children}
        </DivContent>
    )
}
export default Content;