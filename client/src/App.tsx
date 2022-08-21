import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Counter from './Counter/Counter';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";

function App() {
  return (
    // <Counter initCounter={50} />
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu defaultDisplay="grid" />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
