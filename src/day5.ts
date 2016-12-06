import { Md5 } from 'ts-md5/dist/md5';

namespace Day5 {

	function findPasswordPart1(input: string): void {
		let password = "";
		let increment = 0;
		while (password.length < 8) {
			let hashed = Md5.hashStr(input + increment).toString();
			if (hashed.slice(0, 5) === "00000") {
				password = password + hashed[5];
			}
			increment++;
		}
		console.log(`part 1 password: ${password}`);
	}

	function findPasswordPart2(input: string): void {
		let password = "        ";
		let increment = 0;
		let foundChars = 0;
		while (foundChars < 8) {
			let hashed = Md5.hashStr(input + increment).toString();
			if (hashed.slice(0, 5) === "00000") {
				let index = parseInt(hashed[5]);
				if (index >= 0 && index < 8 && password[index] === " ") {
					foundChars++;
					password = password.substr(0, index) + hashed[6] + password.substr(index + 1);
				}
			}
			increment++;
		}
		console.log(`part 2 password: ${password}`);
	}

	findPasswordPart1("ffykfhsq");
	findPasswordPart2("ffykfhsq");
}
