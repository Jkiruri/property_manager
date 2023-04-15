import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Property from "./pages/property/Property";
import New from "./pages/new/New";
import NewProperty from "./pages/newproperty/NewProperty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="property">
              <Route index element={<Property />} />
              {/* <Route path=":productId" element={<Single />} /> */}
            </Route>
            <Route path="/users/newProperty" element={<NewProperty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
