import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import x from "Icons/Tag.svg"

console.log(x);
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;

    > li {
      width: 33.33%;
      padding: 16px;
      text-align: center;
    }
  }
`;

const Nav = ()=>{
    return(
        <NavWrapper>
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
        </NavWrapper>
    )
}
export default Nav
