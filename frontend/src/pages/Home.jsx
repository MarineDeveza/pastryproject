import Slides from "../components/Slides";
import "../Slides.css";

export default function Home() {
  return (
    <div className="App-header">
      <p>
        <Slides />
      </p>
      <p className="slogan">
        "Quand la tradition rencontre la modernité. <br />
        Toute une palette de saveurs à portée de click !"
      </p>
    </div>
  );
}
