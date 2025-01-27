import PAMMLanding from "../minicomponent/PammLanding";
import PammLandingPage from "../minicomponent/PammAccount";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pamm = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <PAMMLanding />
        <PammLandingPage />
        

        </main>
      <Footer />
    </div>
  );
}

export default Pamm;
