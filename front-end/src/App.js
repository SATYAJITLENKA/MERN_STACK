import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<LoginPage/>}  />
      <Route path='/registration' element={<RegistrationPage/>} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
