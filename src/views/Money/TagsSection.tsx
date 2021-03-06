import React from "react";
import styled from "styled-components";
import useTags from "hooks/useTags";
type Props = {
  value: number[],
  onChange:(selected:number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {

  const { tags, addTag } = useTags()
  const selectedTagIds = props.value

  const onToggleTags = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果tag已经是选中的，就赋值一个含有其他所有没被选中的新对象
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId:number)=>selectedTagIds.indexOf(tagId) >= 0 ? "selected" : ""
  // 注意需要执行的回调函数不能写立即执行的方法，用箭头函数包裹
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => onToggleTags(tag.id)}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>添加标签</button>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background-color: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    background-color: inherit;
  }
`;

export default TagsSection