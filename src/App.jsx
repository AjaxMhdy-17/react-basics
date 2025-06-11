
import '../src/index.css'; 

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header/>
      <Menu/>
      <Footer/>
    </>
  );
}


function Header(){
  return <h1>Fast React Pizza Company.</h1>
}

function Footer(){
  return <footer>{new Date().toLocaleTimeString()} We Are Currenly Open</footer>
}

function Menu(){
  return <div>
    <h3>Our Menu</h3>
    <Pizza />
    <Pizza />
    <Pizza />
  </div>
}

function Pizza() {
  return <div>
    <img src="pizzas/salamino.jpg" alt="pizza-photo" />
    <h2>Lorem ipsum dolor sit.</h2>
    <p>description Lorem ipsum dolor sit amet.</p>
  </div>;
}

export default App;
