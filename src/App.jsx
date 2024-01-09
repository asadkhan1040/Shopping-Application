import { Route,Router, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Home from "./components/Home";
function App(){
return<div>

<Menu/>
<Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/cart" element={<Cart/>}></Route>
</Routes>
</div>

}
export default App