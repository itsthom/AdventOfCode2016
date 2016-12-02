// http://adventofcode.com/2016/day/1
var input = "R5, L2, L1, R1, R3, R3, L3, R3, R4, L2, R4, L4, R4, R3, L2, L1, L1, R2, R4, R4, L4, R3, L2, R1, L4, R1, R3, L5, L4, L5, R3, L3, L1, L1, R4, R2, R2, L1, L4, R191, R5, L2, R46, R3, L1, R74, L2, R2, R187, R3, R4, R1, L4, L4, L2, R4, L5, R4, R3, L2, L1, R3, R3, R3, R1, R1, L4, R4, R1, R5, R2, R1, R3, L4, L2, L2, R1, L3, R1, R3, L5, L3, R5, R3, R4, L1, R3, R2, R1, R2, L4, L1, L1, R3, L3, R4, L2, L4, L5, L5, L4, R2, R5, L4, R4, L2, R3, L4, L3, L5, R5, L4, L2, R3, R5, R5, L1, L4, R3, L1, R2, L5, L1, R4, L1, R5, R1, L4, L4, L4, R4, R3, L5, R1, L3, R4, R3, L2, L1, R1, R2, R2, R2, L1, L1, L2, L5, L3, L1".split(", ");
//let input = "R8, R4, R4, R8".split(", ");
// -- Define --
var Facing;
(function (Facing) {
    Facing[Facing["North"] = 0] = "North";
    Facing[Facing["South"] = 1] = "South";
    Facing[Facing["East"] = 2] = "East";
    Facing[Facing["West"] = 3] = "West";
})(Facing || (Facing = {}));
;
var Address = (function () {
    function Address(x, y) {
        this.x = x;
        this.y = y;
    }
    return Address;
}());
var thePlacesIveBeen = [];
var currentLocation = new Address(0, 0);
function begin(input) {
    var facing = Facing.North;
    for (var i = 0; i < input.length; i++) {
        facing = updateFacing(input[i], facing);
        var arrived = walk(input[i], facing);
        if (arrived)
            break;
    }
    var distance = Math.abs(currentLocation.x) + Math.abs(currentLocation.y);
    console.log("Ended up at (" + currentLocation.x + ", " + currentLocation.y + "), " + distance + " blocks from where I started.");
    //console.log(thePlacesIveBeen);
}
function haveIBeenHere(location) {
    return thePlacesIveBeen.some(function (value) {
        return value.x === location.x && value.y === location.y;
    });
}
function walk(input, facing) {
    var steps = parseInt(input.substr(1));
    for (var i = 0; i < steps; i++) {
        currentLocation = step(facing, currentLocation);
        if (haveIBeenHere(currentLocation)) {
            return true;
        }
        thePlacesIveBeen.push(currentLocation);
    }
    return false;
}
function step(facing, location) {
    switch (facing) {
        case Facing.North: return new Address(location.x, location.y + 1);
        case Facing.South: return new Address(location.x, location.y - 1);
        case Facing.East: return new Address(location.x + 1, location.y);
        case Facing.West: return new Address(location.x - 1, location.y);
    }
}
function updateFacing(input, facing) {
    var left = input.substr(0, 1) === "L";
    var right = input.substr(0, 1) === "R";
    switch (facing) {
        case Facing.North: return right ? Facing.East : left ? Facing.West : Facing.North;
        case Facing.South: return right ? Facing.West : left ? Facing.East : Facing.South;
        case Facing.East: return right ? Facing.South : left ? Facing.North : Facing.East;
        case Facing.West: return right ? Facing.North : left ? Facing.South : Facing.West;
    }
}
// -- Execute --
begin(input);
