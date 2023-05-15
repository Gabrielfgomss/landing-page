import Header from "./Components/Header";
import Form from "./Components/Main/Form";
import ProductContainer from "./Components/Main/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recomendation from "./Components/Recomendation";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Form />
      <ProductContainer />
      <Recomendation />
      <Footer />
    </>
  );
}

export default App;
