import './App.css';
import MyBtn from './components/MyBtn';
import toast, { Toaster } from 'react-hot-toast';
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
        <Toaster />
        <Navigation />
        <Switch>
            <Route path='/shop'>
                <ShopPage />
            </Route>
            <Route path='/cart'>
                <CartPage />
            </Route>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='*'>
                <h1>Page not found</h1>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
