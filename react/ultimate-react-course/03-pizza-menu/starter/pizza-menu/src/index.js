// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import ReactDOM from "react-dom/client";
// css
import "./index.css";

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
    soldOut: true,
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

function Header() {
  const style = { color: "red", textAlign: "center" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Co.</h1>
    </header>
  );
}
function Menu() {
  let pizzas = pizzaData;
  // let pizzas = 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            fron our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza ObjPizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still working on still menu. Plase come back latter</p>
      )}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </main>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const opening = 12;
  const close = 22;
  const isOpen = hours >= opening && hours <= close;
  console.info(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={close}></Order>
      ) : (
        <p>
          We'are Happy to welccome yout between {opening}:00 and closeHour{" "}
          {close}:00
        </p>
      )}
    </footer>
    // <footer className="footer">
    //   {new Date().toLocaleTimeString()}We"re Cruntly open
    // </footer>
  );
}

function Order({ close }) {
  return (
    <div className="order">
      <p>We'are open until until {close}:00. Come Visit us order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ ObjPizza }) {
  console.info(ObjPizza.soldOut);
  // if (ObjPizza.soldOut) return null;
  return (
    <li className={`pizza ${ObjPizza.soldOut ? "sold-out" : ""}`}>
      <img src={ObjPizza.photoName} alt={ObjPizza.photoName} />
      <h3>{ObjPizza.name}</h3>
      <p>{ObjPizza.ingredients}</p>
      <span>{ObjPizza.soldOut ? "SOLU OUT" : ObjPizza.price}</span>
    </li>
  );
}
