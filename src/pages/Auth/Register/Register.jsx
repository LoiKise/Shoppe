import React, { useEffect } from "react";
import { Button } from "../../../assets/styles/utlis.js";
import InputText from "../../../components/InputText/InputText.jsx";
import InputPassword from "../../../InputPassword/InputPassword.jsx";
import * as S from "./register.style.js";
import { useForm, Controller } from "react-hook-form";
import { rules } from "../../../constants/rules.js";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage.jsx";
import http from "../../../utils/http.js";

export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      passWord: "",
      confirmedPassWord: "",
    },
  });

  const handleRegister = (data) => console.log("data", data);

  useEffect(() => {
    http.get("products").then((res) => console.log(res));
  }, []);

  console.log("errors", errors);
  return (
    <div>
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FromWrapper>
            <S.FromTitle>Đăng ký</S.FromTitle>
            <S.From noValidate onSubmit={handleSubmit(handleRegister)}>
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
              <S.FormControl>
                <Controller
                  name="confirmedPassWord"
                  control={control}
                  rules={{
                    ...rules.confirmedPassWord,
                    validate: {
                      samePassword: (v) =>
                        v === getValues("passWord") || "Mật khẩu không khớp",
                    },
                  }}
                  render={({ field }) => (
                    <InputPassword
                      type="confirmedPassWord"
                      name="confirmedPassWord"
                      placeholder="Nhập lại khẩu"
                      onChange={field.onChange}
                      value={getValues("confirmedPassWord")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassWord" />
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
