import { Route, Routes } from "react-router-dom";
// import "./App.css";
import SelectPlayerPage from "./page/selectPlayerPage";
import Game from './page/game';
// import GameVsCpu from './page/gameVsCpu'
import { useState } from "react";
import GameVsCpu from "./page/gameVsCpu";

function App() {
    const [playerOneMark, setPlayerOneMark] = useState("X");
    const [playerTwoMark, setPlayerTwoMark] = useState('O');
  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center">
      <Routes>
        <Route path="/" element={<SelectPlayerPage setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark}/>}/>
         <Route path="/select-player" element={<SelectPlayerPage setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark}/>}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/GameVsCpu" element={<GameVsCpu />}/>

      </Routes>
      

    </main>
  );
}

export default App;

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'

// import { Route, Routes } from "react-router-dom";
// import SelectPagePlayer from "./page/selectPlayerPage";
// import Game from "./page/Game";
// import { useState } from "react";


// function App() {
//   const [playerOneMark, setPlayerOneMark] = useState("x");
//   const [playerTwoMark, setPlayerTwoMark] = useState('O')
//   return (
//     <main className="w-full h-screen bg-[#282c34] flex items-center justify-center mx-auto">
//       {/* <Routes>
//         < Route path='/' element={<SelectPagePlayer setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark} />} />
//         <Route path="game" element={<Game setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark} />} />
//       </Routes> */}

//     </main>
//   );
// }

// export default App;
