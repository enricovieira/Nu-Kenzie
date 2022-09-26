import React from "react";
import "./index.css";

function TotalValue({ list }) {
  return (
    <>
      {list.length ? (
        <div className="total__container">
          <h3 className="total__h3">
            Valor total:
            <span className="total__price">{` $${list.reduce((acc, cur) => {
              return Number(cur.value) + acc;
            }, 0)}`}</span>
          </h3>
          <span className="total__span">O valor se refere ao saldo</span>
        </div>
      ) : null}
    </>
  );
}

export default TotalValue;
