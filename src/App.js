import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AllPrograms from './Pages/AllPrograms/AllPrograms';
import Login from './Pages/Login/Login/Login';
import BookNow from './Pages/BookNow/BookNow';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Logins from './Pages/Login/Logins/Logins';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logins" element={<Logins/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="programs" element={<AllPrograms/>}>
            </Route>
              <Route path='program/:id' element={<BookNow/>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
