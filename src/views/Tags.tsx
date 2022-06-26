import Layout from "../components/Layout";
import React from "react";
import useTags from "./useTags";
import styled from "styled-components";
import Icon from "components/Icons";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Center from "components/Center";
import Space from "components/Space";

const TagList = styled.ol`
  font-size: 16px;
  background-color: #fff;
  > li {
    padding: 12px 16px 12px 0;
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-left: 16px;
    }
  }
`;

function Tags() {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"tags/" + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"></Icon>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
