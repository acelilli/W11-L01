import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// PROVIDER = componente di React che consente a tutti i componenti figli di accedere allo store
import store from "../src/store/store";
import MainSearch from "./components/MainSearch";
// import CompanySearchResults from "./components/CompanySearchResults";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// 1. Imposto Actions
// 2. Imposto Reducers
// 3. Imposto Store
// 4. Colleghiamo components e redux
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainSearch />} />
//         <Route path="/:company" element={<CompanySearchResults />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
//diventa:
// ReactDOM.render(
//   //ReactDom.Render -> Renderizza l'applicazione nel doc associato all'ID root
//   // Provider -> avvolge tutto, quindi garantisce a tutti i figli l'accesso allo store
//   <Provider store={store}>
//     <MainSearch />
//   </Provider>,
//   document.getElementById("root")
// );

function App() {
  return (
    (
      <Provider store={store}>
        <MainSearch />
      </Provider>
    ),
    document.getElementById("root")
  );
}

export default App;
