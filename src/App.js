import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { AdminProvider } from "./contexts/useAdminContext";
import Rotas from "./routes";


function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Navbar />
        <Rotas />
        <Footer />
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
