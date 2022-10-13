import React, { Fragment } from "react";
import * as S from "./popover.style";
import PropsTypes from "prop-types";

export default function Popover({ active, children }) {
  return (
    <Fragment>
      {active && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </Fragment>
  );
}

Popover.propsTypes = {
  active: PropsTypes.bool,
  children: PropsTypes.oneOfType([
    PropsTypes.element,
    PropsTypes.arrayOf(PropsTypes.element),
  ]),
};
