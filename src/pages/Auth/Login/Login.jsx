import React from "react";
import { Button } from "../../../assets/styles/utlis.js";
import InputText from "../../../components/InputText/InputText.jsx";
import InputPassword from "../../../InputPassword/InputPassword.jsx";
import * as S from "../Register/register.style.js";
import { useForm, Controller } from "react-hook-form";
import { rules } from "../../../constants/rules.js";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage.jsx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth.slice.js";
import { unwrapResult } from "@reduxjs/toolkit";
import { path } from "../../../constants/path.js";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      passWord: "",
    },
  });

  const handleLogin = async (data) => {
    const body = {
      email: data.email,
      password: data.passWord,
    };
  };

  return (
    <div>
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FromWrapper>
            <S.FromTitle>Đăng nhập</S.FromTitle>
            <S.From noValidate onSubmit={handleSubmit(handleLogin)}>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues("email")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="passWord"
                  control={control}
                  rules={rules.passWord}
                  render={({ field }) => (
                    <InputPassword
                      type="passWord"
                      name="passWord"
                      placeholder="Mật khẩu"
                      onChange={field.onChange}
                      value={getValues("passWord")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="passWord" />
              </S.FormControl>
              <S.FromButton>
                <Button type="submit">Đăng nhập</Button>
              </S.FromButton>
            </S.From>
            <S.FormFooter>
              <span>Nếu bạn chưa có tài khoản Shopee?</span>
              <Link to={path.register} className="link">
                Đăng ký
              </Link>
            </S.FormFooter>
          </S.FromWrapper>
        </S.Container>
      </S.StyleRegister>
    </div>
  );
}
