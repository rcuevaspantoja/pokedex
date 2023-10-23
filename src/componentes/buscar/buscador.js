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
        id="outlined-basic"
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
        variant="contained" 
        onClick={handleClick}
        style={{
            borderRadius: 15,
            backgroundColor: "black",
            fontSize: "20px",
        }}
        > 
            Buscar 
        </Button>
    </div>
  )
}

export default Buscador