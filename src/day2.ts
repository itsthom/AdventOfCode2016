import { getInput } from "./reader";

namespace Day2 {

	let keypad = {
		"1": { "U": "1", "L": "1", "R": "1", "D": "3" },
		"2": { "U": "2", "L": "2", "R": "3", "D": "6" },
		"3": { "U": "1", "L": "2", "R": "4", "D": "7" },
		"4": { "U": "4", "L": "3", "R": "4", "D": "8" },
		"5": { "U": "5", "L": "5", "R": "6", "D": "5" },
		"6": { "U": "2", "L": "5", "R": "7", "D": "A" },
		"7": { "U": "3", "L": "6", "R": "8", "D": "B" },
		"8": { "U": "4", "L": "7", "R": "9", "D": "C" },
		"9": { "U": "9", "L": "8", "R": "9", "D": "9" },
		"A": { "U": "6", "L": "A", "R": "B", "D": "A" },
		"B": { "U": "7", "L": "A", "R": "C", "D": "D" },
		"C": { "U": "8", "L": "B", "R": "C", "D": "C" },
		"D": { "U": "B", "L": "D", "R": "D", "D": "D" }
	};

	function findKeys(input: string[]) {
		let currentKey = "5";
		for (let i = 0; i < input.length; i++) {
			for (let j = 0; j < input[i].length; j++) {
				currentKey = keypad[currentKey][input[i][j]];
			}
			console.log(currentKey);
		}
	}

	findKeys(getInput("day2.txt"));
}