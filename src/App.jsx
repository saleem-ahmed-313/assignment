import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSideMenu from "./components/MainSideMenu/MainSideMenu";
import SecondSideMenu from "./components/SecondSideMenu/SecondSideMenu";
import ConsentDetailsForm from "./components/ConsentForm/ConsentDetailsForm";
import TokenValidator from "./components/TokenValidator/TokenValidator";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainSideMenu />
                <SecondSideMenu />
                <ConsentDetailsForm />
              </>
            }
          />
          <Route
            path="/allow"
            element={
              <>
                <MainSideMenu />
                <SecondSideMenu />
                <TokenValidator />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
