// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// src/App.jsx
import { useState } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [squareFootage, setSquareFootage] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/predict', { square_footage: squareFootage });
  //     setPredictedPrice(response.data.predicted_price);
  //     setError('');
  //   } catch (err) {
  //     console.log(err);
  //     setError('Error making prediction');
  //     setPredictedPrice(null);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const squareFootageValue = parseFloat(squareFootage); // Convert to float
    if (!isNaN(squareFootageValue)) {
      try {
        const response = await axios.post('/predict', { square_footage: squareFootageValue });
        setPredictedPrice(response.data.prediction);
        console.log(response);
      } catch (error) {
        console.error('Error making prediction:', error);
      }
    } else {
      console.error('Invalid input for square footage');
    }
  };
  

  return (
    <div>
      <h1>House Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="squareFootage">Square Footage:</label>
          <input
            type="number"
            id="squareFootage"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Predict</button>
      </form>

      {predictedPrice && (
        <div>
          <h2>Predicted Price: ${predictedPrice}</h2>
        </div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default App;
