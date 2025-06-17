// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'

import { Route, Routes } from "react-router-dom";
import SelectPagePlayer from "./page/selectPlayerPage";
import Game from "./page/Game";


function App() {
  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center mx-auto">
      <Routes>
       < Route path='/' element={ <SelectPagePlayer />} />
       <Route path="game" element={<Game/>}/>
      </Routes>
    
    </main>
  );
}

export default App;
