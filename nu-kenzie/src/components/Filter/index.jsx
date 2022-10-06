import React from "react";
import "./index.css";

function FilterNav({ isListFinancial, setIsFilter }) {
  function filterEntry(array) {
    const entrada = array.filter((item) => item.type === "Entrada");
    setIsFilter(entrada);
  }

  function filterExit(array) {
    const saida = array.filter((item) => item.type === "Saída");
    setIsFilter(saida);
  }

  return (
    <div className="filter__container">
      <span className="filter__span">Resumo Financeiro</span>
      <nav className="filter__nav">
        <button className="filter__btn" onClick={() => setIsFilter([])}>
          Todos
        </button>
        <button
          className="filter__btn"
          onClick={() => filterEntry(isListFinancial)}
        >
          Entradas
        </button>
        <button
          className="filter__btn"
          onClick={() => filterExit(isListFinancial)}
        >
          Despesas
        </button>
      </nav>
    </div>
  );
}

export default FilterNav;
