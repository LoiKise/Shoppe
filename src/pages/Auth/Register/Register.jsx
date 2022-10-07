import React from "react";
import { Button } from "../../../assets/styles/utlis.js";
import InputText from "../../../components/InputText/InputText.jsx";
import InputPassword from "../../../InputPassword/InputPassword.jsx";
import * as S from "./register.style.js";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      passWord: "",
      confirmedPassWord: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FromWrapper>
            <S.FromTitle>Đăng ký</S.FromTitle>
            <S.From noVaidate>
              <S.FormControl>
                <InputText type="email" name="email" placeholder="Email" />
              </S.FormControl>
              <S.FormControl>
                <InputPassword name="passWord" placeholder="Mật khẩu" />
              </S.FormControl>
              <S.FormControl>
                <InputPassword
                  name="confirmedPassWord"
                  placeholder="Nhập lại mật khẩu"
                />
              </S.FormControl>
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
