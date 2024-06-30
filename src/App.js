import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AppRouter } from "./components/routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <div className="app flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
};

export default App;
