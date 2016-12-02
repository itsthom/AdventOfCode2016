// http://adventofcode.com/2016/day/2
//let input = "ULL\nRRDDD\nLURDL\nUUUUD".split("\n");
let input = "DLRURUDLULRDRUDDRLUUUDLDLDLRLRRDRRRLLLLLDDRRRDRRDRRRLRRURLRDUULRLRRDDLULRLLDUDLULURRLRLDUDLURURLDRDDULDRDRDLDLLULULLDDLRRUDULLUULRRLLLURDRLDDLDDLDRLRRLLRURRUURRRRLUDLRDDDDRDULRLLDDUURDUDRLUDULLUDLUDURRDRDUUUUDDUDLLLRLUULRUURDLRLLRRLRLLDLLRLLRRRURLRRLURRLDLLLUUDURUDDLLUURRDRDRRDLLDDLLRDRDRRLURLDLDRDLURLDULDRURRRUDLLULDUDRURULDUDLULULRRRUDLUURRDURRURRLRRLLRDDUUUUUDUULDRLDLLRRUDRRDULLLDUDDUDUURLRDLULUUDLDRDUUUDDDUDLDURRULUULUUULDRUDDLLLDLULLRLRLUDULLDLLRLDLDDDUUDURDDDLURDRRDDLDRLLRLRR\nRLDUDURDRLLLLDDRRRURLLLRUUDDLRDRDDDUDLLUDDLRDURLDRDLLDRULDDRLDDDRLDRDDDRLLULDURRRLULDRLRDRDURURRDUDRURLDRLURDRLUULLULLDLUDUDRDRDDLDDDDRDURDLUDRDRURUDDLLLRLDDRURLLUDULULDDLLLDLUDLDULUUDLRLURLDRLURURRDUUDLRDDDDDRLDULUDLDDURDLURLUURDLURLDRURRLDLLRRUDRUULLRLDUUDURRLDURRLRUULDDLDLDUUDDRLDLLRRRUURLLUURURRURRLLLUDLDRRDLUULULUDDULLUDRLDDRURDRDUDULUDRLRRRUULLDRDRLULLLDURURURLURDLRRLLLDRLDUDLLLLDUUURULDDLDLLRRUDDDURULRLLUDLRDLUUDDRDDLLLRLUURLDLRUURDURDDDLLLLLULRRRURRDLUDLUURRDRLRUDUUUURRURLRDRRLRDRDULLDRDRLDURDDUURLRUDDDDDLRLLRUDDDDDURURRLDRRUUUDLURUUDRRDLLULDRRLRRRLUUUD\nRDRURLLUUDURURDUUULLRDRLRRLRUDDUDRURLLDLUUDLRLLDDURRURLUDUDDURLURLRRURLLURRUDRUDLDRLLURLRUUURRUDDDURRRLULLLLURDLRLLDDRLDRLLRRDLURDLRDLDUDRUULLDUUUDLURRLLRUDDDUUURLURUUDRLRULUURLLRLUDDLLDURULLLDURDLULDLDDUDULUDDULLRDRURDRRLLDLDDDDRUDLDRRLLLRLLLRRULDLRLRLRLLDLRDRDLLUDRDRULDUURRDDDRLLRLDLDRDUDRULUDRDLDLDDLLRULURLLURDLRRDUDLULLDLULLUDRRDDRLRURRLDUDLRRUUDLDRLRLDRLRRDURRDRRDDULURUUDDUUULRLDRLLDURRDLUULLUDRDDDLRUDLRULLDDDLURLURLRDRLLURRRUDLRRLURDUUDRLRUUDUULLRUUUDUUDDUURULDLDLURLRURLRUDLULLULRULDRDRLLLRRDLU\nRRRRDRLUUULLLRLDDLULRUUURRDRDRURRUURUDUULRULULRDRLRRLURDRRRULUUULRRUUULULRDDLLUURRLLDUDRLRRLDDLDLLDURLLUDLDDRRURLDLULRDUULDRLRDLLDLRULLRULLUDUDUDDUULDLUUDDLUDDUULLLLLURRDRULURDUUUDULRUDLLRUUULLUULLLRUUDDRRLRDUDDRULRDLDLLLLRLDDRRRULULLLDLRLURRDULRDRDUDDRLRLDRRDLRRRLLDLLDULLUDDUDDRULLLUDDRLLRRRLDRRURUUURRDLDLURRDLURULULRDUURLLULDULDUDLLULDDUURRRLDURDLUDURLDDRDUDDLLUULDRRLDLLUDRDURLLDRLDDUDURDLUUUUURRUULULLURLDUUULLRURLLLUURDULLUULDRULLUULRDRUULLRUDLDDLRLURRUUDRLRRRULRUUULRULRRLDLUDRRLL\nULRLDLLURDRRUULRDUDDURDDDLRRRURLDRUDDLUDDDLLLRDLRLLRRUUDRRDRUULLLULULUUDRRRDRDRUUUUULRURUULULLULDULURRLURUDRDRUDRURURUDLDURUDUDDDRLRLLLLURULUDLRLDDLRUDDUUDURUULRLLLDDLLLLRRRDDLRLUDDUULRRLLRDUDLLDLRRUUULRLRDLRDUDLLLDLRULDRURDLLULLLRRRURDLLUURUDDURLDUUDLLDDRUUDULDRDRDRDDUDURLRRRRUDURLRRUDUDUURDRDULRLRLLRLUDLURUDRUDLULLULRLLULRUDDURUURDLRUULDURDRRRLLLLLUUUULUULDLDULLRURLUDLDRLRLRLRDLDRUDULDDRRDURDDULRULDRLRULDRLDLLUDLDRLRLRUDRDDR".split("\n");
enum Key {
	one = 1,
	two = 2,
	three = 3,
	four = 4,
	five = 5,
	six = 6,
	seven = 7,
	eight = 8,
	nine = 9,
	a = 10,
	b = 11,
	c = 12,
	d = 13
}

function getNextKey(currentKey : Key, move : string) : Key {
	switch (currentKey) {
		case Key.one:
			switch (move) {
				case "U": return Key.one;
				case "L": return Key.one;
				case "R": return Key.one;
				case "D": return Key.three;
			}
		case Key.two:
			switch (move) {
				case "U": return Key.two;
				case "L": return Key.two;
				case "R": return Key.three;
				case "D": return Key.six;
			}
		case Key.three:
			switch (move) {
				case "U": return Key.one;
				case "L": return Key.two;
				case "R": return Key.four;
				case "D": return Key.seven;
			}
		case Key.four:
			switch (move) {
				case "U": return Key.four;
				case "L": return Key.three;
				case "R": return Key.four;
				case "D": return Key.eight;
			}
		case Key.five:
			switch (move) {
				case "U": return Key.five;
				case "L": return Key.five;
				case "R": return Key.six;
				case "D": return Key.five;
			}
		case Key.six:
			switch (move) {
				case "U": return Key.two;
				case "L": return Key.five;
				case "R": return Key.seven;
				case "D": return Key.a;
			}
		case Key.seven:
			switch (move) {
				case "U": return Key.three;
				case "L": return Key.six;
				case "R": return Key.eight;
				case "D": return Key.b;
			}
		case Key.eight:
			switch (move) {
				case "U": return Key.four;
				case "L": return Key.seven;
				case "R": return Key.nine;
				case "D": return Key.c;
			}
		case Key.nine:
			switch (move) {
				case "U": return Key.nine;
				case "L": return Key.eight;
				case "R": return Key.nine;
				case "D": return Key.nine;
			}
		case Key.a:
			switch (move) {
				case "U": return Key.six;
				case "L": return Key.a;
				case "R": return Key.b;
				case "D": return Key.a;
			}
		case Key.b:
			switch (move) {
				case "U": return Key.seven;
				case "L": return Key.a;
				case "R": return Key.c;
				case "D": return Key.d;
			}
		case Key.c:
			switch (move) {
				case "U": return Key.eight;
				case "L": return Key.b;
				case "R": return Key.c;
				case "D": return Key.c;
			}
		case Key.d:
			switch (move) {
				case "U": return Key.b;
				case "L": return Key.d;
				case "R": return Key.d;
				case "D": return Key.d;
			}
	}
}

function begin(input : string[]) : void {
	let currentKey = Key.five;
	let result = "";
	for (let i = 0; i < input.length; i++) {
		let directions = input[i];
		for (let j = 0; j < input[i].length; j++) {
			currentKey = getNextKey(currentKey, input[i].charAt(j))
		}
		console.log(currentKey);
		result.concat(currentKey.valueOf().toString());
	}
	//console.log(`Input: ${input}`);
	console.log(`Result: ${result}`);
}

begin(input);