import {getInput} from "./reader";

namespace Day6 {
	
	function transpose(matrix: string[][]): string[][] {
		return matrix[0].map((_, col) => matrix.map((row) => row[col]));
	}

	function countAndSortLetters(letters: string[]) : [string, number][] {
		let counts = {};
		for (let i = 0; i < letters.length; i++) {
			if (counts[letters[i]] === undefined) {
				counts[letters[i]] = 1;
			} else {
				counts[letters[i]]++;
			}
		}
		return Object.keys(counts).map(k => {
			let count: [string, number] = [k, counts[k]];
			return count;
		}).sort((a, b) => {
			if (a[1] === b[1]) {
				return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
			}
			return a[1] < b[1] ? 1 : -1;
		});
	}

	function decodeSignal(input: string[]) : void {
		let signal = transpose(input.map(x => x.split("")));
		let message1 = signal.map(x => countAndSortLetters(x)[0][0]).reduce((a, b) => a + b);
		let message2 = signal.map(x => {
			let counts = countAndSortLetters(x);
			return counts[counts.length - 1][0];
		}).reduce((a, b) => a + b);
		console.log(`part 1 message: ${message1}`);
		console.log(`part 2 message: ${message2}`);
	}

	decodeSignal(getInput("day6.txt"));
}