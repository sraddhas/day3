import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

export const Viewmovies = () => {
    const rows=[{mname:'OK Kanmani',mdesc:'Romance',mdirector : 'Mani Ratnam'},
        {mname:'Oppenheimer',mdesc:'Drama',mdirector : 'Christopher Nolan'},
        {mname:'Interstellar',mdesc:'Sci-Fi',mdirector : 'Christopher Nolan'}
    ]
  return (
    <>
    {rows.map((row) =>(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.mdirector}
        </Typography>
        <Typography variant="h5" component="div">
          {row.mname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {row.mdesc}
        </Typography>
        <Typography variant="body2">
          Genre: Emotional
          <br />
          {''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
  )
  
}
</>
  )
}
export default Viewmovies