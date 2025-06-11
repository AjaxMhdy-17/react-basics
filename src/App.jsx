import "../src/index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company.</h1>
    </header>
  );
}

function Footer() {
  // console.log('foo');

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // let status = isOpen ? "We Are Currently Open" : "Not Open";
  let status = isOpen && (
    <div className="order">
      <p>
        We Are Open Till {closeHour}:00 , Come visite us or Order Online
      </p>
      <p><button className="btn">Order</button></p>
    </div>
  );

  return (
    <footer>
      Current time : {new Date().toLocaleTimeString()} {status}
    </footer>
  );
}

function Menu() {


  // const pizzaData = [] ; 
  // const pizzaData = [] ; 
  const numPizzas = pizzaData.length ; 

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {numPizzas > 0 && pizzaData.map((pizza) => (
          <Pizza
            src={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.src} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}

export default App;
