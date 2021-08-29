import React, {useEffect, useState} from "react";

function Main() {
	const [timer, setTimer] = useState(5);
	const [timeElapsed, setTimeElapsed] = useState(0);

	useEffect(() => {
		let stopTimer;
		let stopTimeElapsed;
		if (timer > 0) {
			stopTimer = setInterval(() => setTimer(timer - 1), 1000);
		} else {
			stopTimeElapsed = setInterval(
				() => setTimeElapsed(timeElapsed + 1),
				1000
			);
		}
		return () => {
			if (stopTimer) {
				clearInterval(stopTimer);
			}
			if (stopTimeElapsed) {
				clearInterval(stopTimeElapsed);
			}
		};
	}, [timer, timeElapsed]);

	return (
		<div className='App'>
			<div className='main'>
				<h1>{timer}</h1>
				<h2>
					{Math.floor(timeElapsed / 60) >= 10
						? Math.floor(timeElapsed / 60)
						: "0" + Math.floor(timeElapsed / 60)}
					:
					{timeElapsed % 60 >= 10
						? timeElapsed % 60
						: "0" + (timeElapsed % 60)}
				</h2>
			</div>
		</div>
	);
}

export default Main;
