import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useParams} from 'react-router-dom'
import cities from './datos'
import '../components/Styles/Details.css'


export default function ActionAreaCard() {
    const {id}=useParams()
    const [card] = useState(cities.filter(data => data.id === parseInt(id)))

    return (
        card.map((e, index) => 
        <div key={index} className='details-contenedor'>
        <Card key='index' sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={e.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
        )
    );
}
