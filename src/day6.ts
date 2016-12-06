import {getInput} from "./reader";

namespace Day6 {
	
	function transpose(matrix: string[][]): string[][] {
		return matrix[0].map((_, col) => matrix.map((row) => row[col]));
	}

	function countLetters(letters: string[]) : [string, number][] {
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
		});
	}

	function getMostCommonCharacter(counts: [string, number][]) : string {
		return counts.sort((a, b) => {
			if (a[1] === b[1]) {
				return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
			}
			return a[1] < b[1] ? 1 : -1;
		})[0][0];
	}

	function getLeastCommonCharacter(counts: [string, number][]) : string {
		return counts.sort((a, b) => {
			if (a[1] === b[1]) {
				return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
			}
			return a[1] > b[1] ? 1 : -1;
		})[0][0];
	}

	function decodeSignalPart1(input: string[]) : void {
		let signal = transpose(input.map(x => x.split("")));
		let message = signal.map(x => {
			let counts = countLetters(x);
			return getMostCommonCharacter(counts);
		}).reduce((a, b) => a + b);
		console.log(`part 1 message: ${message}`);
	}

	function decodeSignalPart2(input: string[]) : void {
		let signal = transpose(input.map(x => x.split("")));
		let message = signal.map(x => {
			let counts = countLetters(x);
			return getLeastCommonCharacter(counts);
		}).reduce((a, b) => a + b);
		console.log(`part 1 message: ${message}`);
	}

	decodeSignalPart1(getInput("day6.txt"));
	decodeSignalPart2(getInput("day6.txt"));
}