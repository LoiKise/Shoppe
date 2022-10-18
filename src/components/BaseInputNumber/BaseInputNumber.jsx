import React from "react";
import PropsTypes from "prop-types";

export default function BaseInputNumber({ onChange, value, ...props }) {
  const handleChange = (event) => {
    const val = event.target.value;
    if ((/^\d+$/.test(val) || val === "") && onChange) {
      onChange(val);
    }
  };
  return <input type="text" onChange={handleChange} value={value} {...props} />;
}

// xác thực đầu vào của props khi ai đó muốn sử dụng component này
BaseInputNumber.prototype = {
  onChange: PropsTypes.func,
  value: PropsTypes.string,
};
