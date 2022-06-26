import Layout from "../components/Layout";
import React, { ReactNode, useState } from "react";
import CategorySection from "./Money/CategorySection";
import styled from "styled-components";
import useRecords from "hooks/useRecords";
import useTags from "hooks/useTags";
import day from "dayjs";

type RecordItem = {
  tagIds: number[];
  note: string;
  category: "-" | "+";
  amount: number;
  createdAt: string;
};

const CategoryWrapper = styled.div`
  background-color: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #aaa;
  }
`;

const Header = styled.header`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [Key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(
    (record) => record.category === category
  );
  selectedRecords.forEach((record) => {
    const key = day(record.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(record);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout scrollTop={9999}>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(category) => setCategory(category)}
        />
      </CategoryWrapper>
      {array.map(([date, records]) => (
        <div key={date}>
          <Header>{date}</Header>
          <div>
            {records.map((record) => {
              return (
                <Item key={record.createdAt}>
                  <div className="tags">
                    {record.tagIds
                      .map((tagId) => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce(
                        (result, span, index, array) =>
                          result.concat(
                            index < array.length - 1 ? [span, "，"] : [span]
                          ),
                        [] as ReactNode[]
                      )}
                  </div>

                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">￥{record.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default Statistics;
