"use strict";

class Person {
    constructor(n,p) {
        this._name = n;
        this._phonenumber = p;
    }

    set name(val) {
        this._name = val;
    }

    set phonenumber(val) {
        this._phonenumber = val;
    }

    get name() {
        return this._name;
    }

    get phonenumber() {
        return this._phonenumber;
    }
}

class Addressbook {
    constructor(n) {
        this._name = n;
        this._addressbook = [];
    }

    set name(val) {
        this._name = val;
    }

    set addressbook(val) {
        this._addressbook = val;
    }

    get name() {
        return this._name;
    }

    get addressbook() {
        return this._addressbook;
    }
}

var input = require("readline-sync");
var cupboard = []; //This will contain all Addressbooks.
var cont_outer = false, cont_person = false, cont_search = false, cont_book = true;

//Loop the program until otherwise told.
while(!cont_outer) {
    //This isn't asked the first time but will be asked if the user doesn't terminate the program when prompted.
    if(!cont_book) {
        cont_book = confirmationLoop("\nDo you want to create a new addressbook? No existing addressbook will be deleted. [Y/N] ");
    }

    //This loop lets the user to add new addressbooks.
    while(cont_book) {
        var addBookName = input.question("\nName your addressbook: ");
        let addBook = new Addressbook(addBookName);
        cupboard.push(addBook);

        cont_book = confirmationLoop("\nDo you want to create more addressbooks? [Y/N] ");
    }

    cont_person = confirmationLoop("\nDo you want to add people to the addressbook? [Y/N] ");

    //This loop lets the user to add new persons to existing addressbooks.
    while(cont_person) {
        var name = input.question("\nGive name: ");
        var phonenumber = input.question("\nGive phonenumer: ");
        var addBookName = input.question("\nGive the name of the addressbook this information should be added into: ");
        let person = new Person(name, phonenumber);
        var addBookIndex;
        var addBookArray = cupboard.filter(obj => {
            if(obj.name == addBookName) {
                addBookIndex = cupboard.indexOf(obj);
                return obj;
            }
        })
        addBookArray[0].addressbook.push(person);
        cupboard[addBookIndex] = addBookArray[0];

        cont_person = confirmationLoop("\nAdd more people to the address book? [Y/N] ");
    }

    cont_search = confirmationLoop("\nDo you want to search for a phonenumber? [Y/N] ");

    //This loop lets the user to search for phonenumbers by person names.
    while(cont_search) {
        var searchName = input.question("\nWhose number do you want to search for? ");
        var searchArrayName = input.question("\nFrom which address book do you want to search from? ");
        var addBookArray = cupboard.filter(obj => {
            if(obj.name == searchArrayName) {
                addBookIndex = cupboard.indexOf(obj);
                return obj;
            }
        })

        console.log("\nThe phonenumber of " + searchName + " is " + getPhonenumberByName(searchName, addBookArray[0].addressbook) + ".\n");
        cont_search = confirmationLoop("\nDo you want to search for a phonenumber? [Y/N] ");
    }

    cont_outer = confirmationLoop("\nDo you want to quit the program? [Y/N] ");
}

//Get phonenumber by name.
function getPhonenumberByName(name, arr) {
    var result;
    arr.forEach(element => {
        //We assume names are unique.
        if(element.name == name) {
            result = element.phonenumber;
        }
    });

    return result;
}

//This is used when asking the user whether to move on or not.
function confirmationLoop(str) {
    var answerWrongType = false;
    var cont = true;
    do {
        var contQ = input.question(str);
        switch(contQ) {
            case "Y":
                cont = true;
                break;
            case "N":
                cont = false;
                break;
            default:
                //If user answers something else than "Y" or "N", it will ask the question again.
                answerWrongType = true;
                console.log("\nInput incorrect.\n");
        }
    } while(answerWrongType)

    return cont;
}