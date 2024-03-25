
import { useState, useMemo, useEffect, useCallback } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");

  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  // 반복되는 이벤트 핸들러 함수 >> useCallback이용 메모이제이션
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값:{text}</p>
    </>
  );
}
