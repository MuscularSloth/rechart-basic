import React from "react";
import { subDays } from "date-fns";
import { loremIpsum } from "lorem-ipsum";
import "./App.css";
import RechartComp from "./components/RechartComp/RechartComp";

function App() {
	const getFakeData = () => {
		const fakeData = [];

		for (let num = 30; num >= 0; num -= 1) {
			fakeData.push({
				date: subDays(new Date(), num).toISOString().substring(0, 10),
				value: 1 + Math.random(),
				description: Math.random() > 0.5 ? loremIpsum({ count: 10 }) : "",
				image: "https://picsum.photos/200/300",
			});
		}

		return fakeData;
	};

	return (
		<div className='App'>
			<h3>Chart 1</h3>
			<RechartComp fakeData={getFakeData()} />
			<h3>Chart 2</h3>
			<RechartComp fakeData={getFakeData()} />
			<h3>Chart 3</h3>
			<RechartComp fakeData={getFakeData()} />
		</div>
	);
}

export default App;
