/**Consuming Namespace with an interface and function 
 * from another file using reference */

/// < reference path="assignment4.1.ts" />

let jerseycow : AnimalNameSpace.Cow = { breed : "Jersey", country : "America", quantityofmilk : "1000 litres" }
let foreigncowdata : string  = AnimalNameSpace.cowDetail(jerseycow);
let indiancow : AnimalNameSpace.Cow = { breed : " kamadhenu " , country : "India" , quantityofmilk : "1500 litres"}
let indiancowdata : string  = AnimalNameSpace.cowDetail(indiancow);
console.log(foreigncowdata +"\n" + indiancowdata);
