import { useState } from "react";
// 自定义Hook
// 不返回数组
const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
      { id: 1, name: "衣" },
      { id: 1, name: "食" },
      { id: 1, name: "住" },
      { id: 1, name: "行" },
    ]);
  return {
    tags,
    setTags,
  };
};

export default useTags;
