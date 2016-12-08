import { getInput } from "./reader";

namespace Day7 {

	let regexp = /\[(.*?)\]/g;

	function hasABBA(s: string): boolean {
		for (let i = 0; i < s.length - 2; i++) {
			if (s[i] !== s[i + 1]) {
				let search = [s[i], s[i + 1], s[i + 1], s[i]].join("");
				if (s.indexOf(search) >= 0)
					return true;
			}
		}
		return false;
	}

	function getSSLMatches(s: string[]): string[] {
		let matches: string[] = [];
		let aba: string[] = [];
		for (let i = 0; i < s.length; i++) {
			for (let j = 0; j < s[i].length - 1; j++) {
				let search = s[i][j] + s[i][j + 1] + s[i][j];
				if (search[0] !== search[1] && s[i].indexOf(search) >= 0)
					matches.push(search);
			}
		}
		return matches;
	}

	function invertString(s: string): string {
		return [s[1], s[0], s[1]].join("");
	}

	function count(input: string[]): void {
		let tls = 0, ssl = 0;
		for (let i = input.length - 1; i >= 0; i--) {
			let hypernetSequences = input[i].match(regexp);
			let restOfAddress = input[i].replace(regexp, ",").split(",");
			if (!hypernetSequences.some(hasABBA) && restOfAddress.some(hasABBA)) tls++;
			if (getSSLMatches(restOfAddress).some(m => hypernetSequences.some(x => x.indexOf(invertString(m)) >= 0))) ssl++;
		}
		console.log(`${tls} of ${input.length} addresses support TLS`);
		console.log(`${ssl} of ${input.length} addresses support SSL`);
	}
	count(getInput("day7.txt"));
}