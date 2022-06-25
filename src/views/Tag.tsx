import Button from "components/Button";
import Center from "components/Center";
import Icon from "components/Icons";
import Input from "components/Input";
import Layout from "components/Layout";
import Space from "components/Space";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useTags from "./useTags";
type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 10px;
`;
const Tag: React.FC = (props) => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  // eslint-disable-next-line
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <Icon name=""></Icon>
      </Topbar>
      <InputWrapper>
        <Input type="text" label="标签名" />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export default Tag;
