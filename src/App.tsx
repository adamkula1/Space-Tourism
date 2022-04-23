import React from 'react';
import styled from "styled-components";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Navigation from './components/Navigation';


// const Wrapper = styled.div`
//     background-image: url(${bg});
//     background-position: center;
//     background-size: cover;
//     background-attachment: fixed;
//     min-height: 100vh;
//     transition: .5s ease;
//     background-color: #161515;
//     background-position-y: bottom;
// `;



const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Home /> */}
      <Destination />
    </>
  )
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
