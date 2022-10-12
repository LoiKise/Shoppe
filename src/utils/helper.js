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
