import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import SubMeanu from './components/SubMeanu';
import Customers from './components/Customers';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import CustomersProfile from './components/CustomersProfile';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
     
      <Header countCartItems={cartItems.length}></Header>
      <SubMeanu></SubMeanu>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>

        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
       <CustomersProfile></CustomersProfile>
      <FoodMenu></FoodMenu>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
