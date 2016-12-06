import { getInput } from "./reader";

namespace Day4 {

	function countLetters(letters: string[]): any {
		let counts = {};
		for (let i = 0; i < letters.length; i++) {
			if (counts[letters[i]] === undefined) {
				counts[letters[i]] = 1;
			} else {
				counts[letters[i]]++;
			}
		}
		return counts;
	}

	function lineIsValidRoom(line: string): boolean {
		let room = line.match(/^[-a-z]+/)[0].replace(/-/g, "").split("");
		let checkSum = line.match(/\[.*\]/)[0].replace(/[\[\]]/g, "");
		let counts = countLetters(room);
		let sum = Object.keys(counts).map(k => {
			let count: [string, number] = [k, counts[k]];
			return count;
		}).sort((a, b) => {
			if (a[1] === b[1]) {
				return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
			}
			return a[1] < b[1] ? 1 : -1;
		}).slice(0, 5).map(x => x[0]).reduce((a, b) => a.concat(b));
		return sum === checkSum;
	}

	function getRoomSum(line: string): number {
		let sectorId = line.match(/\d+/)[0];
		return lineIsValidRoom(line) ? parseInt(sectorId) : 0;
	}

	function sumRooms(input: string[]): void {
		let sum = input.map(room => getRoomSum(room)).reduce((a, b) => a + b);
		console.log(`Sum of valid sector IDs: ${sum}`);
	}

	function shiftLetter(letter: string, offset: number) {
		let charCode = letter.charCodeAt(0);
		if ((charCode >= 97) && (charCode <= 122))
			return String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
		return letter;
	}

	function decodeRoom(line: string, sector: number): string {
		let result = "";
		let room = line.match(/^[-a-z]+/)[0].replace(/-/g, " ").trim();
		for (let i = 0; i < room.length; i++) {
			result += shiftLetter(room[i], sector);
		}
		return result;
	}

	function findNorthPoleStorage(input: string[]): void {
		let decodedRooms = input.filter(lineIsValidRoom).map(r => {
			let sector = parseInt(r.match(/\d+/)[0]);
			return `${sector}: ${decodeRoom(r, sector)}`
		}).filter(x => x.indexOf("north") >= 0);
		console.log(decodedRooms);
	}

	sumRooms(getInput("day4.txt"));
	findNorthPoleStorage(getInput("day4.txt"));
}