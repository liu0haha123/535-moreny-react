import Input from "components/Input";
import React, { ChangeEventHandler, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
};
// 函数组件不支持Ref
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        placeholder="在这里输入备注"
        value={note}
        onChange={onChange}
      />
    </Wrapper>
  );
};
export default NoteSection;
