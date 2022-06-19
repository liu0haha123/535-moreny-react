import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags />
                        </Route>
                        <Route path="/money">
                            <Money />
                        </Route>
                        <Route path="/Statistics">
                            <Statistics />
                        </Route>
                        <Redirect exact from="/" to="money" />
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Main>
                <Nav></Nav>
            </Wrapper>
        </Router>
    );
}


function Tags() {
    return (
        <div>
            <h2>标签</h2>
        </div>
    );
}

function Money() {
    return (
        <div>
            <h2>记账</h2>
        </div>
    );
}

function Statistics() {
    return (
        <div>
            <h2>统计</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>页面不存在</h2>
        </div>
    );
}

export default App;
