import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../../api/category.api";
import productApi from "../../api/product.api";
import { payloadCreator } from "../../utils/helper";

export const getCategories = createAsyncThunk(
  "home/getCategories",
  payloadCreator(categoryApi.getCategories)
);

export const getProduct = createAsyncThunk(
  "home/getProduct",
  payloadCreator(productApi.getProduct)
);
