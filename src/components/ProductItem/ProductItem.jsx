import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/ProductRating";
import * as S from "./productItem.style";
import PropTypes from "prop-types";

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img src="alll" alt="ss" />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>Iphone 14</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>34000000đ</S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>33000000đ</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating />
              <S.ProductItemSold>
                <span>1000</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};
