import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Icon from "components/Icons";
// 预防 TreeShaking

const NavWrapper = styled.nav`
  line-height: 24px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;

    > li {
      width: 33.33%;

      text-align: center;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.active{
          color: red;
          .icon{
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/Statistics">
            <Icon name="charts" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
