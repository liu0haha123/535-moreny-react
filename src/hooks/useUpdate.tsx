import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current >= 1) {
      fn();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]); // 注意不可变数据
};

export default useUpdate