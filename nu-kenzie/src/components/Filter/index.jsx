import React from "react";
import "./index.css";

function FilterNav() {
  return (
    <div className="filter__container">
      <span className="filter__span">Resumo Financeiro</span>
      <nav className="filter__nav">
        <button className="filter__btn">Todos</button>
        <button className="filter__btn">Entradas</button>
        <button className="filter__btn">Despesas</button>
      </nav>
    </div>
  );
}

export default FilterNav;
