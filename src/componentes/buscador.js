import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';



function buscador() {

    return (
    <div className='buscador'>
        <TextField
        id="input-with-icon-textfield"
        sx={{fontSize: 40,
            input: { color: 'white' },
        }}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <Icon icon="mdi:pokeball" style={{ fontSize: '25px', color: 'white' }}/>
            </InputAdornment>
            ),
        }}
        variant="standard"
        />
    </div>
  )
}

export default buscador