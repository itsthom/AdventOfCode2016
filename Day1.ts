// http://adventofcode.com/2016/day/1

enum Facing { North, South, East, West };
let state: [Facing, number, number] = [Facing.North, 0, 0];
let input: string[] = "R5, L2, L1, R1, R3, R3, L3, R3, R4, L2, R4, L4, R4, R3, L2, L1, L1, R2, R4, R4, L4, R3, L2, R1, L4, R1, R3, L5, L4, L5, R3, L3, L1, L1, R4, R2, R2, L1, L4, R191, R5, L2, R46, R3, L1, R74, L2, R2, R187, R3, R4, R1, L4, L4, L2, R4, L5, R4, R3, L2, L1, R3, R3, R3, R1, R1, L4, R4, R1, R5, R2, R1, R3, L4, L2, L2, R1, L3, R1, R3, L5, L3, R5, R3, R4, L1, R3, R2, R1, R2, L4, L1, L1, R3, L3, R4, L2, L4, L5, L5, L4, R2, R5, L4, R4, L2, R3, L4, L3, L5, R5, L4, L2, R3, R5, R5, L1, L4, R3, L1, R2, L5, L1, R4, L1, R5, R1, L4, L4, L4, R4, R3, L5, R1, L3, R4, R3, L2, L1, R1, R2, R2, R2, L1, L1, L2, L5, L3, L1".split(", ");
//let input: string[] = "R2, L3".split(", ");

for (var i = 0; i < input.length; i++) {
	updateFacing(input[i]);
	walk(input[i]);
}

function walk(input: string) {
	let steps = parseInt(input.substr(1));
	switch (state[0]) {
		case Facing.North:
			state[2] += steps;
			break;
		case Facing.South:
			state[2] -= steps;
			break;
		case Facing.East:
			state[1] += steps;
			break;
		case Facing.West:
			state[1] -= steps;
			break;
	}
}

function updateFacing(input: string) {
	let left = input.search(/L/);
	let right = input.search(/R/);
	switch (state[0]) {
		case Facing.North:
			state[0] = right ? Facing.East : left ? Facing.West : Facing.North;
			break;
		case Facing.South:
			state[0] = right ? Facing.West : left ? Facing.East : Facing.South;
			break;
		case Facing.East:
			state[0] = right ? Facing.South : left ? Facing.North : Facing.East;
			break;
		case Facing.West:
			state[0] = right ? Facing.North : left ? Facing.South : Facing.West;
			break;
	}
}

console.log("state: ", state);
console.log("distance from origin: ", Math.abs(state[1]) + Math.abs(state[2]));