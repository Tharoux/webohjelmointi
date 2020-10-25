"use strict";

class Henkilo {
    //YoB = year of birth.
    constructor(firstName, lastName, nickName, YoB) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._nickName = nickName;
        this._YoB = YoB;
    }

    set firstName(val) {
        this._firstName = val;
    }

    set lastName(val) {
        this._lastName = val;
    }

    set nickName(val) {
        this._nickName = val;
    }

    set YoB(val) {
        this._YoB = val;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get nickName() {
        return this._nickName;
    }

    get YoB() {
        return this._YoB;
    }
}

class Urheilija extends Henkilo {
    constructor(firstName, lastName, nickName, YoB, pic, weight, sport, feat) {
        super(firstName, lastName, nickName, YoB);
        this._pic = pic;
        this._weight = weight;
        this._sport = sport;
        this._feat = feat;
    }

    set pic(val) {
        this._pic = val;
    }

    set weight(val) {
        this._weight = val;
    }

    set sport(val) {
        this._sport = val;
    }

    set feat(val) {
        this._feat = val;
    }

    get pic() {
        return this._pic;
    }

    get weight() {
        return this._weight;
    }

    get sport() {
        return this._sport;
    }

    get feat() {
        return this._feat;
    }
}

const urheilija1 = new Urheilija("Pekka", "Routalempi", "Pekkis", 1956, "www.picturesofpekka.com", "85 kg", "football", ["Olympics of 1999", "Medal from school"]);
console.log("0\n");
console.log(urheilija1);

console.log("\n1\t" + urheilija1.lastName);

urheilija1.lastName = "Reponiemi";

console.log("\n2\t" + urheilija1.lastName);

var arr = urheilija1.feat;
arr.push("Marathon");
urheilija1.feat = arr;

console.log("\n3\t" + urheilija1.feat);

console.log("\n");

console.log(urheilija1);