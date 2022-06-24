import { useState } from "react";
// 自定义Hook
// 不返回数组
const useTags = () => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  return {
    tags,
    setTags,
  };
};

export default useTags;
