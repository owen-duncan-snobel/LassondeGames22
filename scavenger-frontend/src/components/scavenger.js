import React, { useEffect, useState } from 'react';
import Cards from './cards';

const Scavenger = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
       fetch('https://lassonde-games-strapi.herokuapp.com/api/scavenger-cards/?populate=*')
       .then(res => res.json())
       .then(json => setData(json.data))

    }, []);

	return (
        <div>
            {data.length > 0 ? data.map(card => <Cards data={card} />) : ''}
        </div>
    )
};
export default Scavenger;
