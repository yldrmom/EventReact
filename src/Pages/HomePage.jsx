import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {

  const [events, setevents] = useState()
  useEffect(() => {
    fetch("http://localhost:5274/api/Activity")
  .then(res=>res.json())
  .then(data=>setevents(data))
  }, [])
  
  return <>
  {
   events.map(event =><Link to={`/activity/${event.id}`}>
    <Stack direction="row" justifyContent={"center"} spacing={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdeOBVZ6-C5e1ElX0bzMCJomWXQOKYmCCdd6n3Fg_dDWxR8_M"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </Stack>
                
                
      </Link>)
    

  }
  
  
  </>

}

export default HomePage
