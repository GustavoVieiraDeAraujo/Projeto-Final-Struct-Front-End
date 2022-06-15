import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Rotas from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
