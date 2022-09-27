import "./App.css";
import homeLogo from "./assets/homeLogo.svg";
import CreateDescription from "./components/Description";
import { useState } from "react";
import FinancialList from "./components/ListFinancial";
import CreateFormValue from "./components/FormValue";
import FilterNav from "./components/Filter";
import TotalValue from "./components/ListCount";

function App() {
  const [isMenu, setIsMenu] = useState(true);

  const [isListFinancial, setIsListFinancial] = useState([
    
  ]);

  function addItem(formData) {
    setIsListFinancial([...isListFinancial, formData]);
  }

  function removeItem(itemSelected) {
    const newList = isListFinancial.filter((item, index) => index !== itemSelected);
    setIsListFinancial(newList);
  }

  return (
    <div className="App">
      {isMenu ? (
        <div className="App-header">
          <div className="App-info">
            <h1 className="title">
              <span>Nu</span> Kenzie
            </h1>
            <CreateDescription />
            <button type="button" onClick={() => setIsMenu(!isMenu)}>
              Iniciar
            </button>
          </div>
          <img src={homeLogo} alt="Retângulos sobrepostos" />
        </div>
      ) : (
        <div className="dashboard">
          <header className="dashboard__header">
            <div>
              <h1 className="dashboard__title title">
                <span>Nu</span> Kenzie
              </h1>
              <button
                className="dashboard__btn"
                type="button"
                onClick={() => setIsMenu(!isMenu)}
              >
                Iniciar
              </button>
            </div>
          </header>

          <div className="dashboard__container">
            <section className="form__section">
              <CreateFormValue addItem={addItem} />
              <TotalValue list={isListFinancial}/>
            </section>
            <section className="list__section">
              <FilterNav />
              <FinancialList
                financialResume={isListFinancial}
                removeItem={removeItem}
              />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
