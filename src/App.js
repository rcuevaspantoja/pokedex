import './styles/App.css';
import NavBar from './componentes/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Listado from './componentes/listado/listado'
import Buscar from './componentes/buscar/base'

function App() {
  return (
    <div className='App'>

      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />}/>

        <Route path="/listado" element={ <Listado /> }/>

        <Route path="/buscar" element={ <Buscar />  }/>
      </Routes> 

    

    </div>
  );
}
export default App;
