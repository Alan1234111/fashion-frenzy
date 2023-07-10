import {Link} from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center p-5 m-5">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Button as={Link} variant="danger" to="/" className="m-5">
        Return to Home
      </Button>
    </div>
  );
}

export default NotFound;
