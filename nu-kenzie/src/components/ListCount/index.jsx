import React from "react";
import "./index.css";

function TotalValue({ list }) {
  const valorTotal = list.reduce(
    (acc, cur) =>
      cur.type === "Saída" ? acc - Number(cur.value) : acc + Number(cur.value),
    0
  );

  return (
    <>
      {list.length ? (
        <div className="total__container">
          <h3 className="total__h3">
            Valor total:
            <span className="total__price">{` $${valorTotal}`}</span>
          </h3>
          <span className="total__span">O valor se refere ao saldo</span>
        </div>
      ) : null}
    </>
  );
}

export default TotalValue;
