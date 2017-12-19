var AnimalNameSpace;
(function (AnimalNameSpace) {
    function cowDetail(cow) {
        return "The cow details are as follows \nBreed : " + cow.breed + " \nCountry : " + cow.country + "\nQuantity of milk:" + cow.quantityofmilk;
    }
    AnimalNameSpace.cowDetail = cowDetail;
})(AnimalNameSpace || (AnimalNameSpace = {}));
/// < reference path="assignment4.1.ts" />
var jerseycow = { breed: "Jersey", country: "America", quantityofmilk: "1000 litres" };
var foreigncowdata = AnimalNameSpace.cowDetail(jerseycow);
var indiancow = { breed: " kamadhenu ", country: "India", quantityofmilk: "1500 litres" };
var indiancowdata = AnimalNameSpace.cowDetail(indiancow);
console.log(foreigncowdata + "\n" + indiancowdata);
