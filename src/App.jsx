import "./global-styles/App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Card from "./components/Card.jsx";
import ButtonTW from "./components/ButtonTW.jsx";
import CardTW from "./components/CardTW.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Footer />
        <Card />
        <ButtonTW label="Primary" primary />
        <ButtonTW label="Secondary" />
        <CardTW
          title="Tailwind Card"
          text="This is a card styled with Tailwind CSS."
        />
      </div>
    </>
  );
}

export default App;
