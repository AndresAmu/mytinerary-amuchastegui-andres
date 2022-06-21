import * as React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import Card from '../Card'
import NotFound from '../NotFound';


export default function TitlebarImageList() {


    const [cities, setcities] = React.useState([])
    const [search, setSearch] = React.useState('')


    React.useEffect(() => {
        axios.get("http://localhost:4000/api/cities")

            .then(response => {

                setcities(response.data.response.cities)
            })
    }, [])

    let city = cities?.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))


    return (
        
        <div className='contenedor-cities'>
        <Box className='buscador' sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', }}>
            <input className='input' onKeyUp={(e) => { setSearch(e.target.value) }} placeholder='Search City' type='text'></input>
        </Box>
        

    <Box>
    {city?.length > 0 ? (<Card filterCard={city}/>) : (<NotFound/>)}
    </Box>
    </div>
    
    )

}