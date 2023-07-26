import React from "react";
import {
  HorizontalColumnsWrapper,
  ColumUl,
  ColumLi,
} from "components/Footer/components/HorizontalColumn/HorizontalColumn.style";

function HorizontalColumn(props) {
  return (
    <HorizontalColumnsWrapper>
      <ColumUl>
        {props.items.map(([item, href], index) => {
          return index === 0 ? (
            <ColumLi key={index}>{item}</ColumLi>
          ) : (
            <ColumLi key={index}>
              <a href={href}>{item}</a>
            </ColumLi>
          );
        })}
      </ColumUl>
    </HorizontalColumnsWrapper>
  );
}

export default HorizontalColumn;
