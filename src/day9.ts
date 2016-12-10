import { getInput } from "./reader";

namespace Day9 {
	enum inputMode { normal, instruction, repeating }

	function decompressPart1(input: string): string {
		let output = "";
		let buffer = "";
		let repeatLength = 0;
		let repeatCount = 0;
		let state = inputMode.normal;

		for (let i = 0; i < input.length; i++) {
			let c = input[i];
			switch (state) {
				case inputMode.normal:
					if (c === "(") {
						state = inputMode.instruction;
					} else {
						output += c;
					}
					break;
				case inputMode.instruction:
					if (c === "x") {
						repeatLength = parseInt(buffer);
						buffer = "";
					} else if (c === ")") {
						repeatCount = parseInt(buffer);
						buffer = "";
						state = inputMode.repeating;
					} else {
						buffer += c;
					}
					break;
				case inputMode.repeating:
					buffer = buffer + c;
					repeatLength--;
					if (repeatLength === 0) {
						for (let j = 0; j < repeatCount; j++) output += buffer;
						buffer = "";
						repeatCount = 0;
						state = inputMode.normal;
					}
					break;
			}
		}
		return output;
	}

	function decompressPart2(input: string): number {
		let lengthOfMessage = 0;
		let buffer = "";
		let repeatLength = 0;
		let repeatCount = 0;
		let state = inputMode.normal;
		for (let i = 0; i < input.length; i++) {
			let c = input[i];
			switch (state) {
				case inputMode.normal:
					if (c === "(") {
						state = inputMode.instruction;
					} else {
						lengthOfMessage++;
					}
					break;
				case inputMode.instruction:
					if (c === "x") {
						repeatLength = parseInt(buffer);
						buffer = "";
					} else if (c === ")") {
						repeatCount = parseInt(buffer);
						buffer = "";
						state = inputMode.repeating;
					} else {
						buffer += c;
					}
					break;
				case inputMode.repeating:
					buffer += c;
					repeatLength--;
					if (repeatLength === 0) {
						lengthOfMessage += decompressPart2(buffer) * repeatCount;
						buffer = "";
						repeatCount = 0;
						state = inputMode.normal;
					}
					break;
			}
		}
		return lengthOfMessage;
	}

	let output1 = decompressPart1(getInput("day9.txt")[0]);
	let output2 = decompressPart2(getInput("day9.txt")[0]);
	console.log(`decompressed length part 1: ${output1.length}`);
	console.log(`decompressed length part 2: ${output2}`);
}