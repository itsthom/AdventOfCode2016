import { getInput } from "./reader";

namespace Day8 {

	let screen: boolean[][] = [];

	function initializeScreen(r: number, c: number): void {
		for (let i = 0; i < r; i++) {
			let row: boolean[] = [];
			for (let j = 0; j < c; j++) row.push(false);
			screen.push(row);
		}
	}

	function rect(width: number, height: number): void {
		for (let r = 0; r < height; r++) {
			for (let c = 0; c < width; c++) screen[r][c] = true;
		}
	}

	function rotateArray(arr: boolean[], offset: number): boolean[] {
		for (let i = 0; i < offset; i++) {
			let x = arr.pop();
			arr = [x].concat(arr);
		}
		return arr;
	}

	function rotateRow(row: number, offset: number): void {
		screen[row] = rotateArray(screen[row], offset);
	}

	function rotateCol(col: number, offset: number): void {
		let column = rotateArray(screen.map(r => r[col]), offset);
		for (let i = 0; i < column.length; i++) {
			screen[i][col] = column[i];
		}
	}

	function performInstruction(instruction: string): void {
		let args = instruction.match(/\d+/g).map(x => parseInt(x));
		if (args.length !== 2) return;

		if (instruction.indexOf("rect") >= 0)
			rect(args[0], args[1]);
		else if (instruction.indexOf("row") >= 0)
			rotateRow(args[0], args[1]);
		else if (instruction.indexOf("column") >= 0)
			rotateCol(args[0], args[1]);
	}

	function readInstructions(input: string[]): void {
		for (let i = 0; i < input.length; i++) {
			performInstruction(input[i]);
		}
		let count = screen.map(r => r.filter(c => c).length).reduce((a, b) => a + b);
		console.log(screen.map(r => r.map(c => c ? "#" : " ").join("")).join("\n"));
		console.log(`\n${count} pixels lit up`);
	}

	initializeScreen(6, 50);
	readInstructions(getInput("day8.txt"));
}