import {getInput} from "./reader";

namespace Day1 {

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
		for (let i = 0; i < input.length; i++) {
			facing = updateFacing(input[i], facing);
			if (walkToTargetLocation(input[i], facing))
				break;
		}
		let distance = Math.abs(currentLocation.x) + Math.abs(currentLocation.y);
		console.log(`Ended up at (${currentLocation.x}, ${currentLocation.y}), ${distance} blocks from where I started.`);
	}

	function walkToTargetLocation(input: string, facing: Facing) : boolean {
		let steps = parseInt(input.substr(1));
		for (let i = 0; i < steps; i++) {
			currentLocation = step(facing, currentLocation);
			if (iveBeenHereBefore(currentLocation)) {
				return true;
			}
			thePlacesIveBeen.push(currentLocation);
		}
		return false;
	}

	function iveBeenHereBefore(location: Address) : boolean {
		return thePlacesIveBeen.some(function(value: Address) : boolean {
			return value.x === location.x && value.y === location.y;
		})
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
		let right = input.substr(0, 1) === "R";
		switch (facing) {
			case Facing.North: return right ? Facing.East : Facing.West;
			case Facing.South: return right ? Facing.West : Facing.East;
			case Facing.East: return right ? Facing.South : Facing.North;
			case Facing.West: return right ? Facing.North : Facing.South;
		}
	}

	begin(getInput("day1.txt")[0].split(", "));
}
