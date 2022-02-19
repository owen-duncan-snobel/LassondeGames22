import React from 'react';


const Cards = ({ data }) => {
    const { attributes } = data;
    const {location, badge, clue, difficultyRating, fact, image} = attributes;
    
	return (
		<div className="text-center border">
			<div className="flex justify-center">
				<div className="max-w-sm rounded overflow-hidden shadow-lg">
					<img className="w-full" src={image.data.attributes.url} />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{clue}</div>
						<p className="text-gray-700 text-base">{fact}</p>
						<div>{location}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cards;
