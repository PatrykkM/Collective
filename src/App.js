import Main from "./components/Main";
import PictureWithQuote from "./components/PictureWithQuote";
import FashionCategory from "./components/FashionCategory";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="flex flex-col font-roboto bg-main justify-center items-center text-LightBlack overflow-hidden  min-w-314">
      <Main />
      <PictureWithQuote />
      <FashionCategory />
      <Footer />
    </div>
  );
};

export default App;
