import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (<Router>
      <div
        className="navbar"
        style={{
          height: "62px",
        }}
      >
        <Navbar />
      </div>
      <div className="d-flex justify-content-center">
        <div className={`container m-5 bg-dark p-4 rounded-5 border border-4 d-flex justify-content-center`}
          style={{
            boxShadow: `.1px .1px 26px black}`
          }}>
          <Routes>
          <Route exact  path="/sports"  element={<News key="sports" category="sports" />}></Route>
          <Route exact  path="/science"  element={<News key="science" category="science"/>}></Route>
          <Route exact  path="/general"  element={<News key="general" category="general"/>}></Route>
          <Route exact  path="/business"  element={<News key="business" category="business"/>}></Route>
          <Route exact  path="/health"  element={<News key="health" category="health" />}></Route>
          <Route exact  path="/technology"  element={<News key="technology" category="technology" />}></Route>
          <Route exact  path="/News-Monkey" element={<News key="News-Monkey"  category="general" />}></Route>
          </Routes>
        </div>
        </div>
      </Router>
  );
}

export default App;
