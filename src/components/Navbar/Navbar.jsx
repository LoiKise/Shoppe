import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { path } from "../../constants/path";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import usePopover from "../../hooks/usePopover";
import Popover from "../Popover/Popover";
import * as S from "./navbar.style";

export default function Navbar() {
  const authenticated = useAuthenticated();
  const profile = useSelector((state) => state.auth.profile);

  const { activePopover, showPopover, hidePopover } = usePopover();

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://cf.shopee.vn/file/b8011e4a0e4ca10f909bd30ec0ed2c5c_tn" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                <S.UserLink>Đăng xuất</S.UserLink>
              </Popover>
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  );
}
