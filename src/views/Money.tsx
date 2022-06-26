import Layout from "../components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import TagsSection from "./Money/TagsSection";
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";
import useRecords from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type CateGory = "+" | "-";
const defaultData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as CateGory,
  amount: 0,
};

const CategoryWrapper = styled.div`
  background-color: #c4c4c4;
`;
function Money() {
  const [selected, setSelected] = useState(defaultData);

  const { addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const submit = () => {
    const flag = addRecord(selected);
    if (flag) {
      window.alert("保存成功");
    }
    setSelected(defaultData);
  };
  return (
    <MyLayout>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;
