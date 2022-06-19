import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
function Layout(props:any) {
    return (
        <Wrapper>
            <Main>
                <h2>{props.children}</h2>
            </Main>
            <Nav />
        </Wrapper>
    )
}

export default Layout