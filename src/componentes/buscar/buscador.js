import {React, useState} from 'react' 
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';

const Buscador = ({nombrePokemon, cambioNombre}) => {

    const [entrada, setEntrada] = useState('')

    const handleClick = () =>{
        cambioNombre(entrada)
    }

    return (
    <div className='buscador'>
        
        <TextField
        id="input-with-icon-textfield"
        sx={{input: { color: 'white', textTransform: 'uppercase' }}}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <Icon icon="mdi:pokeball" style={{ fontSize: '25px', color: 'white' }}/>
            </InputAdornment>
            ),
        }}
        variant="standard"
        defaultValue={nombrePokemon}
        onChange={ (e)=>{setEntrada(e.target.value)} }

        /> 

        <Button variant="contained" onClick={handleClick}> Buscar </Button>
    </div>
  )
}

export default Buscador