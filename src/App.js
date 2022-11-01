
import Uploadui from "./components/Uploadui";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import axios from "axios";
import Useprofile from "./components/Useprofile";
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/uploadui" element={<Uploadui/>} />
     <Route path="/userprofile" element={<Useprofile/>}/>
    </Routes>
  
    </BrowserRouter>
     </>
  );
}

export default App;
