import './styles/App.css';
import NavBar from './componentes/navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Listado from './componentes/listado/listado'
import Buscar from './componentes/buscar/base'

function App() {
  return (
    <div className='App'>

      <NavBar />

      <Routes>
        <Route path={"/"} element={<Navigate to="/Listado" />}/>

        <Route path="/listado" element={ <Listado /> }/>

        <Route path="/buscar" element={ <Buscar />  }/>
      </Routes> 
    </div>
  );
}
export default App;
