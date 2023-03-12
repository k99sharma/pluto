// importing custom components
import Navbar from "../components/Navbar/Navbar";

// home component
export default function Home() {
  return (
    <div className="home">
      <div className="home-navbar">
        <Navbar />
      </div>

      <div className="home-text">Homepage</div>
    </div>
  );
}
