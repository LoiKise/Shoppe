import authApi from "../api/auth.api";

export const isEmail = (value) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

// Currying

export const payloadCreator = (asyncFunc) => async (arg, thunkApi) => {
  try {
    const res = await asyncFunc(arg);
    return res;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
};

export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${_id}`);

export const formatMoney = (value, character = ".") =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character);

export const formatK = (value) => {
  const price = Number((Number(value) / 1000).toFixed(2));
  if (price > 1) {
    return price + "k";
  }

  return value;
};
