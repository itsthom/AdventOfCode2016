// http://adventofcode.com/2016/day/1
let input: string[] = "R5, L2, L1, R1, R3, R3, L3, R3, R4, L2, R4, L4, R4, R3, L2, L1, L1, R2, R4, R4, L4, R3, L2, R1, L4, R1, R3, L5, L4, L5, R3, L3, L1, L1, R4, R2, R2, L1, L4, R191, R5, L2, R46, R3, L1, R74, L2, R2, R187, R3, R4, R1, L4, L4, L2, R4, L5, R4, R3, L2, L1, R3, R3, R3, R1, R1, L4, R4, R1, R5, R2, R1, R3, L4, L2, L2, R1, L3, R1, R3, L5, L3, R5, R3, R4, L1, R3, R2, R1, R2, L4, L1, L1, R3, L3, R4, L2, L4, L5, L5, L4, R2, R5, L4, R4, L2, R3, L4, L3, L5, R5, L4, L2, R3, R5, R5, L1, L4, R3, L1, R2, L5, L1, R4, L1, R5, R1, L4, L4, L4, R4, R3, L5, R1, L3, R4, R3, L2, L1, R1, R2, R2, R2, L1, L1, L2, L5, L3, L1".split(", ");
//let input = "R8, R4, R4, R8".split(", ");

// -- Define --
enum Facing { North, South, East, West };
class Address {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

let thePlacesIveBeen: Address[] = [];
let currentLocation = new Address(0, 0);

function begin(input: string[]) : void {
	let facing = Facing.North;

	for (var i = 0; i < input.length; i++) {
		facing = updateFacing(input[i], facing);
		let arrived = walk(input[i], facing);
		if (arrived)
			break;
	}
	let distance = Math.abs(currentLocation.x) + Math.abs(currentLocation.y);
	console.log(`Ended up at (${currentLocation.x}, ${currentLocation.y}), ${distance} blocks from where I started.`);
	//console.log(thePlacesIveBeen);
}

function haveIBeenHere(location: Address) : boolean {
	return thePlacesIveBeen.some(function(value: Address) : boolean {
		return value.x === location.x && value.y === location.y;
	})
}

function walk(input: string, facing: Facing) : boolean {
	let steps = parseInt(input.substr(1));
	for (let i = 0; i < steps; i++) {
		currentLocation = step(facing, currentLocation);
		if (haveIBeenHere(currentLocation)) {
			return true;
		}
		thePlacesIveBeen.push(currentLocation);
	}
	return false;
}

function step(facing: Facing, location: Address) : Address {
	switch (facing) {
		case Facing.North: return new Address(location.x, location.y + 1);
		case Facing.South: return new Address(location.x, location.y - 1);
		case Facing.East: return new Address(location.x + 1, location.y);
		case Facing.West: return new Address(location.x - 1, location.y);
	}
}

function updateFacing(input: string, facing: Facing) : Facing {
	let left = input.substr(0, 1) === "L";
	let right = input.substr(0, 1) === "R";
	switch (facing) {
		case Facing.North: return right ? Facing.East : left ? Facing.West : Facing.North;
		case Facing.South: return right ? Facing.West : left ? Facing.East : Facing.South;
		case Facing.East: return right ? Facing.South : left ? Facing.North : Facing.East;
		case Facing.West: return right ? Facing.North : left ? Facing.South : Facing.West;
	}
}

// -- Execute --
begin(input);
