import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from "./components/Layout";
import CreateLevel from "./components/CreateLevel";

import './css/App.css';

function App() {


 
  return (
   <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
       <Route path="/createlevel/:levelId?" element={<CreateLevel />} />
       </Route>
   </Routes>
  );
}

export default App;