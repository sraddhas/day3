import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export const Addmovies = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          defaultValue=""
        />
         </div>

         <div>
         <TextField
          required
          id="outlined-required"
          label="Movie Director"
          defaultValue=""
        />
         </div>

         <div>
         <TextField
          required
          id="outlined-required"
          label="Description"
          defaultValue=""
        />
         </div>

         <div>
         <TextField
          required
          id="outlined-required"
          label="Movie Image"
          defaultValue=""
        />
         </div>
         <div>
            <Button variant='contained' >
                ADD
            </Button>
            
        </div>

         </Box>
  )
}
