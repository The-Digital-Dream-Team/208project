import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="customers">
              <Route index element={<List/>}/>
              <Route path=":customerId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="activities">
              <Route index element={<List/>}/>
              <Route path=":activityId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
