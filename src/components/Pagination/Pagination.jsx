import React from "react";
import * as S from "./pagination.style";
import usePagination from "@mui/material/usePagination";
import classNames from "classnames";
import qs from "query-string";
import { useNavigate } from "react-router-dom";
import { path } from "../../constants/path";

export default function Pagination({ pagination, filters }) {
  const { items } = usePagination({
    count: pagination.page_size,
    page: pagination.page || 1,
  });
  const navigate = useNavigate();

  const goToPrev = () => {
    if (pagination.page !== 1) {
      let _filters = { ...filters, page: pagination.page - 1 };
      navigate(path.home + `?${qs.stringify(_filters)}`);
    }
  };

  const goToNext = () => {
    if (pagination.page !== pagination.page_size) {
      let _filters = { ...filters, page: pagination.page + 1 };
      navigate(path.home + `?${qs.stringify(_filters)}`);
    }
  };

  const goToPage = (page) => {
    const _filters = {
      ...filters,
      page,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  };

  return (
    <div>
      <S.Pagination>
        {items.map(({ page, type, selected }, index) => {
          let chirldren = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            chirldren = <S.ButtonNoOutline key={index}>...</S.ButtonNoOutline>;
          } else if (type === "previous") {
            chirldren = (
              <S.ButtonIcon
                key={index}
                disabled={pagination.page === 1}
                onClick={goToPrev}
              >
                <svg
                  enableBackground="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-left"
                >
                  <g>
                    <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                  </g>
                </svg>
              </S.ButtonIcon>
            );
          } else if (type === "next") {
            chirldren = (
              <S.ButtonIcon
                key={index}
                onClick={goToNext}
                disabled={pagination.page === pagination.page_size}
              >
                <svg
                  enableBackground="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-right"
                >
                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                </svg>
              </S.ButtonIcon>
            );
          } else if (type === "page") {
            chirldren = (
              <S.ButtonNoOutline
                className={classNames({ active: selected })}
                onClick={() => goToPage(page)}
                key={index}
              >
                {page}
              </S.ButtonNoOutline>
            );
          }
          return chirldren;
        })}
      </S.Pagination>
    </div>
  );
}
