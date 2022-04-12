import "./App.css";
import { Fragment } from "react";
import { Header } from "./layouts/Header";
import { Homepage } from "./containers/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./containers/About";
import { UserDetail } from "./containers/UserDetail";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users/:login" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
