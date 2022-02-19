import React, { useEffect, useState, useRef} from 'react';
import Cards from './cards';
import ReactToPrint from 'react-to-print';

const ComponentToPrint = React.forwardRef((props, ref) => {
    const {data,difficulty, voice} = props;
    
    console.log(ref,props)
    return (
		<div ref={ref}>
            {data.filter((card) =>card.attributes.difficultyRating === difficulty)
				.map((card) => (
                    <Cards
                        data={card}
                        voice={voice}
                        difficulty={difficulty}
                        key={card.attributes.createdAt}
                    />
                ))}
		</div>
	);
});

const Scavenger = () => {
	const [data, setData] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');
    const [voice, setVoice] = useState([]);

	const [voices, setVoices] = useState([]);
	const [speaking, setSpeaking] = useState(false);
	const [supported, setSupported] = useState(false);

    let componentRef = useRef(null);
	const processVoices = (voiceOptions) => {
		setVoices(voiceOptions);
        setVoice(voiceOptions);
	};

	const getVoices = () => {
		let voiceOptions = window.speechSynthesis.getVoices();
		if (voiceOptions.length > 0) {
			processVoices(voiceOptions);
			return;
		}
	};

	useEffect(() => {
		getVoices();
	}, []);


	useEffect(async () => {
       fetch('https://lassonde-games-strapi.herokuapp.com/api/scavenger-cards/?populate=*')
       .then(res => res.json())
       .then(json => setData(json.data))

    }, []);

    console.log(difficulty)
    console.log(data)

	return (
		<>
			<div className="flex justify-end m-2">
				<form
					onChange={(event) =>
						setVoice(
							voices.filter(
								(voice) => voice.lang === event.target.value
							)
						)
					}
					className="col-span-12"
				>
					<select id="selectNumber">
						{voices.length > 0
							? voices.map((voice) => (
									<option>{voice.lang}</option>
							  ))
							: ''}
						<option>Change Language</option>
					</select>
				</form>
			</div>
			<div className='flex justify-end m-2'>
				<ReactToPrint
					trigger={() => (
						<button>
							Print out scavenger hunt!
						</button>
					)}
					content={() => componentRef}
				/>
			</div>
			<form
				className="flex justify-center"
				onChange={(event) => setDifficulty(event.target.value)}
			>
				<select>
					<option name="easy" value="easy">
						Difficulty
					</option>
					<option name="easy" value="easy">
						Easy
					</option>
					<option name="medium" value="medium">
						Medium
					</option>
					<option name="hard" value="hard">
						Hard
					</option>
				</select>
			</form>

			<div>
				{data.length > 0 ? (
					<ComponentToPrint
						data={data}
						difficulty={difficulty}
						voice={voice}
						ref={(ref) => (componentRef = ref)}
					/>
				) : (
					''
				)}
			</div>
		</>
	);
};
export default Scavenger;
