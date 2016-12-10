import { getInput } from "./reader";

namespace Day9 {
	enum inputMode { normal,  instruction, repeating }

	function decompress(input: string): string {
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

	function test(input: string, expected: string) {
		let result = decompress(input);
		if (result === expected)
			console.log(`pass result: "${result}"`);
		else
			console.log(`FAIL -> actual: "${result}", expected: "${expected}"`);
	}
	// test("ADVENT", "ADVENT");
	// test("A(1x5)BC", "ABBBBBC");
	// test("(3x3)XYZ", "XYZXYZXYZ");
	// test("A(2x2)BCD(2x2)EFG", "ABCBCDEFEFG");
	// test("(6x1)(1x3)A", "(1x3)A");
	// test("X(8x2)(3x3)ABCY", "X(3x3)ABC(3x3)ABCY");
	let output = decompress(getInput("day9.txt")[0]);
	console.log(`decompressed length: ${output.length}`);
}