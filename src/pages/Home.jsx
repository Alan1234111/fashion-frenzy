import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div id="home" className="d-flex align-items-center">
      <div className="d-flex flex-column align-items-center p-5">
        <h1 className="w-50 text-center text-white fw-bold">Welcome to FashionFrenzy!</h1>
        <h2 className="text-white fs-6 w-50 text-center">Discover FashionFrenzy, where style meets passion. Explore our meticulously curated collection, blending timeless classics with cutting-edge designs. Embrace your unique fashion sense with our diverse range of clothing, accessories, and footwear. Step into a fashion sanctuary and unleash your style like never before.</h2>
        <Button as={Link} to="/products" variant="danger" className="mt-4">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default Home;
