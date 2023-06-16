import "./App.css";
import Button from "./Components/Button";
import Screen from "./Components/Screen";
import ClearScreen from "./Components/ClearScreen";
import { useState } from "react";
import { evaluate } from "mathjs";
import Footer from "./Components/Footer";

function App() {
  const [input, setInput] = useState("");

  const setscreen = (value) => {
    setInput(input + value);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingresa Primero los valores para realizar el calculo");
    }
  };

  return (
    <div className=" h-screen pt-[10px] bg-gray-900 flex flex-wrap justify-center items-center ">
      <div className="w-full h-10 m-2 flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="50px"
          viewBox="0 0 36 36"
          aria-hidden="true"
          role="img"
          class="iconify iconify--twemoji"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#F18F26"
            d="M10.478 22.439s.702 2.281-.337 7.993c-.186 1.025-.46 2.072-.599 2.93c-1.757 0-1.851 2.002-1.478 2.002h2.094c1.337 0 2.971-3.334 3.854-7.961s-3.534-4.964-3.534-4.964zm13.042 3.702s2.272 1.22 2.188 4.081c-.033 1.131-.249 2.091-.355 3.024c-1.832 0-1.839 1.985-1.305 1.985h1.856c.923 0 3.001-3.158 3.379-7.281c.379-4.122-5.763-1.809-5.763-1.809z"
          />
          <path
            fill="#FFCC4E"
            d="M36 8.447C36 3.525 31.859 1 27 1a1 1 0 1 0 0 2c1.804 0 6.717.934 6.717 5.447c0 2.881-1.567 5.462-3.77 5.982c-.164-.073-.345-.104-.509-.192c-7.239-3.917-13.457.902-15.226-.29c-1.752-1.182-.539-3.255-2.824-5.243c-.33-1.841-1.073-4.477-1.794-4.477c-.549 0-1.265 1.825-1.74 3.656c-.591-1.381-1.363-2.756-1.86-2.756c-.64 0-1.278 2.273-1.594 4.235c-1.68 1.147-2.906 2.809-2.906 4.765c0 2.7 4.05 3.357 5.4 3.411c1.35.054 3.023 3.562 3.585 5.072c1.242 4.367 2.051 8.699 2.698 11.183c-1.649 0-1.804 2.111-1.348 2.111c.713 0 1.953-.003 2.225 0c1.381.014 2.026-4.706 2.026-8.849c0-.212-.011-.627-.011-.627s1.93.505 6.038-.208c2.444-.424 5.03.849 5.746 3.163c.527 1.704 1.399 3.305 1.868 4.484c-1.589 0-1.545 2.037-1.084 2.037c.787 0 1.801.014 2.183 0c1.468-.055.643-7.574 1.03-10.097s1.267-5.578-.229-8.797C34.857 15.236 36 11.505 36 8.447z"
          />
          <circle fill="#292F33" cx="5.994" cy="11.768" r=".9" />
          <path
            fill="#E75A70"
            d="M2.984 12.86c-.677.423-.677 1.777-1.015 1.777S.954 13.841.954 12.86c-.001-.981 2.862-.52 2.03 0z"
          />
          <path
            fill="#FEE7B8"
            d="M6.578 14.343c-.041.026-.09.036-.142.026c-.018-.004-1.548-.241-2.545.146c-.129.05-.341-.023-.413-.191s.023-.365.152-.415c1.44-.569 2.857-.234 2.934-.218c.139.029.195.19.188.372c-.004.114-.104.235-.174.28zm-.472 2.339a.186.186 0 0 1-.141-.031c-.015-.01-1.331-.83-2.402-.853c-.138-.003-.305-.154-.305-.341c0-.186.165-.335.304-.333c1.552.024 2.724.891 2.789.937c.117.082.104.255.027.424c-.049.107-.189.182-.272.197z"
          />
          <path
            fill="#F18F26"
            d="M7.854 7.881s.372-.039.859.033c.217-.46.585-.887.585-.887s.281.668.386 1.179c.025.12.218.117.322.189c0 0 .038-3.463-.863-3.836c.001-.002-.755 1.124-1.289 3.322zM4.399 9.36s.384-.267.883-.574c.217-.624.568-1.333.568-1.333s.307.602.345.81c.21-.114.21-.106.403-.19c0 0-.114-2.286-1.099-2.527c0 0-.732 1.372-1.1 3.814z"
          />
          <path
            fill="#FD9"
            d="M18.45 23.644c-2.649.57-2.38 2.782-2.38 2.782s1.93.505 6.038-.208a5.542 5.542 0 0 1 3.107.377c-1.607-3.047-4.315-3.479-6.765-2.951z"
          />
          <path
            fill="#F18F26"
            d="M14.686 14.109c.476.676 2.397 2.368 2.745 2.159c.338-.203.59-2.055.342-2.706c-1.329.359-2.385.658-3.087.547zm7.024 2.689c.623.138 1.507-2.979 1.41-4.123c-1.449.017-2.78.256-3.965.537c.335 1.08 1.953 3.452 2.555 3.586zm2.627-4.082c.042.723.982 2.603 1.285 2.737c.307.137 1.685-1.319 1.866-2.061a12.573 12.573 0 0 0-3.151-.676z"
          />
        </svg>
        <h1 className="text-5xl text-slate-50 ">Calculadora</h1>
      </div>

      <div className="w-[400px] h-[600px] p-[14px] bg-black border-orange-500 border-2 rounded-md">
        <Screen input={input} />
        <hr className="bg-slate-600"/>
        <div className="m-1 flex items-center justify-center">
          <Button handleClick={setscreen}>7</Button>
          <Button handleClick={setscreen}>8</Button>
          <Button handleClick={setscreen}>9</Button>
          <Button handleClick={setscreen}>/</Button>
        </div>
        <div className="m-1 flex items-center justify-center">
          <Button handleClick={setscreen}>4</Button>
          <Button handleClick={setscreen}>5</Button>
          <Button handleClick={setscreen}>6</Button>
          <Button handleClick={setscreen}>*</Button>
        </div>
        <div className="m-1 flex items-center justify-center">
          <Button handleClick={setscreen}>1</Button>
          <Button handleClick={setscreen}>2</Button>
          <Button handleClick={setscreen}>3</Button>
          <Button handleClick={setscreen}>-</Button>
        </div>
        <div className="m-1 flex items-center justify-center">
          <Button handleClick={result}>=</Button>

          <Button handleClick={setscreen}>0</Button>
          <Button handleClick={setscreen}>.</Button>
          <Button handleClick={setscreen}>+</Button>
        </div>
        <div className="m-1 flex items-center justify-center">
          <ClearScreen handleScreen={() => setInput("")}></ClearScreen>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
