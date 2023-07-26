import React from "react";
import {
  VerticalColumnsWrapper,
  ColumUl,
  ColumLi,
} from "components/Footer/components/VerticalColumn/VerticalColumn.style";

function VerticalColumn(props) {
  return (
    <VerticalColumnsWrapper>
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
    </VerticalColumnsWrapper>
  );
}

export default VerticalColumn;
