import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Icon from "components/Icons"
// 预防 TreeShaking

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;

    > li {
      width: 33.33%;
      padding: 4px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag"></Icon>
          <Link to="/tag">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#charts" />
          </svg>
          <Link to="/Statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
