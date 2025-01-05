import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import cat from "/mePerdonas.jpg";
import flor from "/flor.jpg";
import coqueta from "/coqueta.jpg";
import gif from "/gif.gif";

function App() {
  const [count, setCount] = useState(0);
  const [sheForgave, setSheForgave] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleForgive = () => {
    setSheForgave(true);
  };

  const getMessage = () => {
    const sizes = {
      [0]: "No",
      [1]: "Estás segura?",
      [2]: "Estás completamente segura?",
      [3]: "Pero segura segura?",
      [4]: "Por favor?",
      [5]: "Por favor Por favor??",
      [6]: "Andale no seas mala",
      [7]: "Deja de darle click aquí",
      [8]: "Yaaaa",
      [9]: "No puedes decir que si??",
    };

    return sizes[count as keyof typeof sizes] ?? "Andalee";
  };

  return (
    <div className="flex flex-col h-[80vh] justify-center items-center bg-gray-200">
      {sheForgave ? (
        <>
          <div className="flex items-center justify-center gap-4">
            <img src={flor} className="size-8" />

            <p>DIABLO MI AMOL!!!</p>

            <img src={coqueta} className="size-8" />
          </div>
          <a
            className="text-blue-500 text-lg text-center underline my-5"
            href="https://wa.me/584121240464?text=Hola%20hermoso%20Te%20quiero"
            target="_blank"
          >
            <p>Cuadremos unos besos preciosa</p> <p>CLICK ACÁ!!</p>
          </a>

          <img src={gif} alt="gif" className="size-40 text-lg my-2" />

          <p>Pa ti flaca</p>
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/bZLojmRvRd8?si=jRfyvIQjk3rYQF2R"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </>
      ) : (
        <>
          <p className="text-xl">Hola hermosa!</p>
          <img src={cat} alt="Me perdonas?" className="size-40 text-lg my-2" />
          <p>Me perdonas?</p>

          <div className="flex flex-wrap gap-4 mt-4 w-full justify-center  items-center">
            <Button text="Si!!" handleClick={handleForgive} count={count} />

            <Button text={getMessage()} handleClick={handleCount} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
