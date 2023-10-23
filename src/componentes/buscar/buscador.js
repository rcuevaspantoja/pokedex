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
        fullWidth
        id='searchbar'
        sx={{input: { color: 'white', textTransform: 'uppercase', fontSize: '30px', fontFamily: 'Press Start 2P' }}}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <Icon icon="mdi:pokeball" style={{ fontSize: '40px', color: 'white' }}/>
            </InputAdornment>
            ),
        }}
        variant="standard"
        onChange={ (e)=>{setEntrada(e.target.value)} }

        /> 

        <Button 
        id='botonbuscar'
        variant="contained" 
        onClick={handleClick}
        > 
            Buscar 
        </Button>
    </div>
  )
}

export default Buscador