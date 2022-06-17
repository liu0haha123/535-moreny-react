import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  > ul {
    display: flex;

    > li {
      width: 33.33%;
      padding: 16px;
      text-align: center;
    }
  }
`;

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/Statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/Statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}


function Tags() {
    return (
        <div>
            <h2>标签页</h2>
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
