import PAMMLanding from "../minicomponent/PammLanding";
import PammLandingPage from "../minicomponent/PammAccount";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQ from "./FAQ";
const Pamm = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
        <main className="flex-grow">
        <PAMMLanding />
        <PammLandingPage />
        <FAQ />

        </main>
      <Footer />
    </div>
  );
}

export default Pamm;
