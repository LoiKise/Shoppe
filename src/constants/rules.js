import { isEmail } from "../utils/helper";

export const rules = {
  email: {
    required: {
      value: true,
      message: "Email bắt buộc nhập",
    },
    minLength: {
      value: 5,
      message: "Email phải có độ dài từ 5 tới 150 ký tự",
    },
    maxLength: {
      value: 150,
      message: "Email phải có độ dài từ 5 tới 150 ký tự ",
    },
    validate: {
      email: (v) => isEmail(v) || "Email không đúng định dạng",
    },
  },
  passWord: {
    required: {
      value: true,
      message: "Bắt buộc nhập mật khẩu",
    },
    minLength: {
      value: 7,
      message: "Mật khẩu phải có độ dài từ 7 tới 50 ký tự ",
    },
    maxLength: {
      value: 50,
      message: "Mật khẩu phải có độ dài từ 7 tới 50 ký tự ",
    },
  },
  confirmedPassWord: {
    required: {
      value: true,
      message: "Bắt buộc nhập mật khẩu",
    },
    minLength: {
      value: 7,
      message: "Nhập lại khẩu phải có độ dài từ 7 tới 50 ký tự ",
    },
    maxLength: {
      value: 50,
      message: "Nhập lại khẩu phải có độ dài từ 7 tới 50 ký tự ",
    },
  },
};
