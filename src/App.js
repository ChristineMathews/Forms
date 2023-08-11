import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './views/LoginPage';
// import MainPage from './views/MainPage';
// import OtherPage1 from './views/OtherPage1';
// import OtherPage2 from './views/OtherPage2';
// import ScorecardPage from './views/ScorecardPage';
// import { AuthProvider } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';

// const App = () => {
//     return (
//         <Router>
//             <AuthProvider>
//                 <Routes>
//                     <Route path="/" element={<LoginPage />} />
//                     <Route path="/main" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
//                     <Route path="/page1" element={<ProtectedRoute><OtherPage1 /></ProtectedRoute>} />
//                     <Route path="/page2" element={<ProtectedRoute><OtherPage2 /></ProtectedRoute>} />
//                     <Route path="/scorecard" element={<ProtectedRoute><ScorecardPage /></ProtectedRoute>} />
//                 </Routes>
//             </AuthProvider>
//         </Router>
//     );
// };

// export default App;
