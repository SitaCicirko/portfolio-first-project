import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar/NavBar";
import Main from "./components/layout/Main/Main";

function App() {
  return (
    <div className="mx-auto bg-auto bg-gray-600 flex flex-col w-1/3 h-screen">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
