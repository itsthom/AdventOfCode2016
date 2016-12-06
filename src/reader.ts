/// <reference path="../typings/node/node.d.ts" />
import fs = require("fs");

export function getInput(filename: string): string[] {
	let data = fs.readFileSync("../input/" + filename);
	if (!data) console.error("bad happened");
	return data.toString().split("\n");
}