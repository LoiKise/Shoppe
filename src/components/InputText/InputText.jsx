import React, { useState } from "react";
import * as S from "./inputText.style.js";

export default function InputText({ ...props }) {
  const [focus, setFocus] = useState(false);

  return (
    <S.FromControl focus={focus}>
      <input
        {...props}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </S.FromControl>
  );
}
