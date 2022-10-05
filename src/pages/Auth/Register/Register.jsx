import React from "react";
import { Button } from "../../../assets/styles/utlis.js";
import * as S from "./register.style.js";

export default function Register() {
  return (
    <div>
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FromWrapper>
            <S.FromTitle>Đăng ký</S.FromTitle>
            <S.From noVaidate>
              <S.FromControl></S.FromControl>
              <S.FromControl></S.FromControl>
              <S.FromControl></S.FromControl>
              <S.FromControl></S.FromControl>
              <S.FromButton>
                <Button type="submit">Đăng ký</Button>
              </S.FromButton>
            </S.From>
          </S.FromWrapper>
        </S.Container>
      </S.StyleRegister>
    </div>
  );
}
