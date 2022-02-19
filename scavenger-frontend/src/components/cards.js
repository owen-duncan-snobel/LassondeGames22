import React, { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import WhiteSquare from '../whitesquare.png';

const Cards = ({ data, voice, difficult }) => {
    const { attributes } = data;
    const {location, badge, clue, difficultyRating, fact, image} = attributes;
	 const [value, setValue] = useState(`
	 	The location for the next item it is at ${location}. The clue is as follows "${clue}". Did you know that ${fact}
	 `);
	const { speak } = useSpeechSynthesis();

	const [blur, setBlur] = useState(true);
	
	const checkAnswer = (event) => {
		event.preventDefault();

	}

	const [completed, setCompleted] = useState(false);

	return (
		<div className="m-4">
			<div className="flex justify-center">
				<div className="max-w-md rounded overflow-hidden shadow-lg">
					<div>
						<img
							className={
								difficultyRating === 'hard' && blur
									? 'w-full blur-md'
									: difficultyRating === 'medium' && blur
									? 'w-full blur-sm'
									: 'w-full'
							}
							src={image.data.attributes.url}
							href={location}
							onClick={() => setBlur(!blur)}
						/>
					</div>
					<div className="flex justify-end px-6 py-4">
						<button
							className="flex"
							onClick={() =>
								speak({ text: value, voice: voice[0] })
							}
						>
							<span className="flex">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fillRule="evenodd"
									clipRule="evenodd"
								>
									<path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
								</svg>
								Read Clue
							</span>
						</button>
					</div>

					<div className="px-6 py-4">
						<div className="mb-2">
							<span className=" text-xl text-slate-600 font-mono font-extrabold mr-2">
								Location{' '}
							</span>
							{location}
						</div>
						<p className="mb-2">
							<span className="text-xl text-slate-600  font-mono font-extrabold mr-2">
								Clue{' '}
							</span>{' '}
							{clue}
						</p>
						<p className="text-base mb-2">
							<span className=" text-xl text-slate-600  font-mono font-extrabold mr-2">
								Fact{' '}
							</span>{' '}
							{fact}
						</p>
						<p>
							<span className=" text-xl text-slate-600  font-mono font-extrabold mr-2">
								Completed{' '}
							</span>{' '}
							<form onChange={(event) => setCompleted(!completed)}>
								<input
									type="checkbox"
									id="completed"
								/>
							</form>
							{/* 							<span className=" text-xl text-slate-600  font-mono font-extrabold mr-2">
								Answer{' '}
							</span>{' '}
							<form className="w-full max-w-lg">
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<input
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											id="grid-first-name"
											type="text"
											placeholder="Answer"
										/>
									</div>
									<div className="w-full md:w-1/2 px-3">
										<button
											onSubmit={(event) => }
											className="flex-shrink-0 bg-slate-700 hover:bg-slate-900 border-slate-700 hover:border-slate-900 text-sm border-4 text-white py-1 px-2 rounded"
											type="button"
										>
											Check Answer
										</button>
									</div>
								</div>
							</form> */}
						</p>
					</div>

					<div className="flex justify-between p-5 px-6 py-4">
						<p className="text-base mb-2">
							<span className=" text-xl text-slate-600  font-mono font-extrabold mr-2">
								Badge{' '}
							</span>
						</p>
						<div></div>
						<img
							className="rounded-full border shadow-sm border-black h-24 w-24"
							src={completed ? badge.data.attributes.url : WhiteSquare}
							alt="user image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cards;
