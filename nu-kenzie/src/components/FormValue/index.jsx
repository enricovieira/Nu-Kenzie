import React from "react";
import { useState } from "react";
import "./index.css";

function CreateFormValue({ addItem }) {
  const options = ["Entrada", "Saída"];

  const [formData, setFormData] = useState({
    description: "",
    type: options[0],
    value: 0,
  });

  function onSubmit(event) {
    event.preventDefault();

    addItem(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="descricao">Descrição</label>
      <input
        name="descricao"
        type="text"
        value={formData.description}
        placeholder="Digite aqui sua descrição"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <span className="form__example">Ex.: Compra de roupas</span>
      <div className="form__container">
        <label htmlFor="valor">Valor</label>
        <input
          name="valor"
          type="number"
          value={formData.value}
          onChange={(e) => setFormData({ ...formData, value: e.target.value })}
        />
        <label htmlFor="tipo">Tipo de valor</label>
        <select
          name="tipo"
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          defaultValue={formData.type}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default CreateFormValue;
