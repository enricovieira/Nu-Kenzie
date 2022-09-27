import React from "react";
import emptyList from "../../assets/emptyList.svg";
import "./index.css";
import buttonTrash from "../../assets/buttonTrash.svg";

function FinancialList({ financialResume, removeItem }) {
  return (
    <ul>
      {financialResume.length ? (
        financialResume.map((item, index) =>
          item.type === "Saída" ? (
            <li className="card__expense" key={index}>
              <div className="card__info">
                <h3 className="card__name">{item.description}</h3>
                <span className="card__type">{item.type}</span>
              </div>
              <div className="card__value">
                <span>{`R$ ${item.value}`}</span>
                <img
                  onClick={() => {
                    removeItem(index);
                  }}
                  src={buttonTrash}
                  alt="Botão para deletar"
                />
              </div>
            </li>
          ) : (
            <li className="card" key={index}>
              <div className="card__info">
                <h3 className="card__name">{item.description}</h3>
                <span className="card__type">{item.type}</span>
              </div>
              <div className="card__value">
                <span>{`R$ ${item.value}`}</span>
                <img
                  onClick={() => {
                    removeItem(index);
                  }}
                  src={buttonTrash}
                  alt="Botão para deletar"
                />
              </div>
            </li>
          )
        )
      ) : (
        <div className="list__empty">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img src={emptyList} alt="Lista Vazia" />
        </div>
      )}
    </ul>
  );
}

export default FinancialList;
