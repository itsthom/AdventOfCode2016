import { getInput } from "./reader";

namespace Day3 {

	function getLengthsFromRow(input: string): number[] {
		return input.trim().split(/ +/).map(value => parseInt(value));
	}

	function isTriangle(lengths: number[]): boolean {
		return lengths.length === 3
			&& lengths[0] + lengths[1] > lengths[2]
			&& lengths[0] + lengths[2] > lengths[1]
			&& lengths[1] + lengths[2] > lengths[0];
	}

	function countTrianglesPart1(input: string[]): void {
		let count = input.map(row => isTriangle(getLengthsFromRow(row)) ? 1 : 0).reduce((a, b) => a + b);
		console.log(`Part1: Found ${count} triangles in ${input.length} sets of input.`);
	}

	function transpose(matrix: number[][]): number[][] {
		return matrix[0].map((_, col) => matrix.map((row) => row[col]));
	}

	function countTrianglesPart2(input: string[]): void {
		let count = 0;
		let matrix: number[][] = [];
		for (let i = 0; i < input.length; i++) {
			matrix.push(getLengthsFromRow(input[i]));
			if (matrix.length === 3) {
				count += transpose(matrix).map(row => isTriangle(row) ? 1 : 0).reduce((a, b) => a + b);
				matrix = [];
			}
		}
		console.log(`Part2: Found ${count} triangles in ${input.length} sets of input.`);
	}

	countTrianglesPart1(getInput("day3.txt"));
	countTrianglesPart2(getInput("day3.txt"));
}