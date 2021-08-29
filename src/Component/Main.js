import React, {useEffect, useState} from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function Main() {
	const [timer, setTimer] = useState(5);
	const [timeElapsed, setTimeElapsed] = useState(0);
    let keyboardRef

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
                <Keyboard
                            ref={r => keyboardRef = r}
                            layout={{
                                'default': [
                                    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                                    '{tab} q w e r t y u i o p [ ] \\',
                                    '{lock} a s d f g h j k l ; \' {enter}',
                                    '{shift} z x c v b n m , . / {shift}',
                                    '{space}'
                                ],
                                'shift': [
                                    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                                    '{tab} Q W E R T Y U I O P { } |',
                                    '{lock} A S D F G H J K L : " {enter}',
                                    '{shift} Z X C V B N M < > ? {shift}',
                                    '{space}'
                                ]
                            }}
                            display={{
                                '{bksp}': 'backspace',
                                '{enter}': 'enter',
                                '{tab}': 'tab',
                                '{lock}': 'caps lock',
                                '{shift}': 'shift',
                                '{space}': ' ',
                            }}
                        />
			</div>
		</div>
	);
}

export default Main;
