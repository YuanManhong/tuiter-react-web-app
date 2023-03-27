import './App.css';
import Labs from './labs/index';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NewHomeComponent from "./tuiter/A7Home";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  {/*<Route index element={<Labs/>}/>*/}
                  <Route path="/*" element={<Labs/>}/> {/*可以接受/后面跟别的词缀*/}
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
