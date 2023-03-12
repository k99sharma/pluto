// importing custom components
import Banner from "../Banner/Banner";
import Button from "../Button/Button";

// navbar component
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-banner">
        <Banner />
      </div>

      <div className="navbar-login">
        <Button label="Login" href="/login" />
      </div>
    </div>
  );
}
