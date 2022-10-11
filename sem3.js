const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"

console.log();

const  element=['Ex' , '2'];
console.log(element.join(' '));

console.log();

console.log(3 == "3");
console.log(3 === "3");
console.log(true+true+true ==3);

console.log();

console.log(0.1+0.2);
console.log(0.1+0.2 == 0.3);

console.log();

function checkDivisible (n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

console.log();

function occurences(text, character){
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));

console.log();

function occurences(text, character){
	console.log(text.split(character).length - 1);
    return text.split(character).length - 1;
}

console.log(occurences("sample texte", "e"));

console.log();


let occurences2 = (text, character) => text.split(character).length - 1;

console.log(occurences2("sample text", "e"));

console.log('EX 2.2');

var a1 = [2, 4, 6, 7, 8];
var a2 = [];

function numarPar(array1, array2){
	for(var nr = 0; nr < array1.length; nr++)
	{
		if(array1[nr] % 2 == 0)
		{
			array2.push(array1[nr]);
			
		}
	}
	console.log(array2);
}

numarPar(a1, a2);

console.log('EX 2.3');

var b1 = [5, 6, 7, 8, 9];
var b2 = [];

function numarParList(array1, array2){
	for(var nr2 = 0; nr2 < array1.length; nr++)
	{
		if(array1[nr2] % 2 == 0)
		{
			array2.push(array1[nr2]);
			
		}
	}
	return array2;
}

numarPar(b1, b2);

console.log(' ');

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
      console.log(day);
      console.log(days[day]);
}

for (var day of days) {
      console.log(day);
}


console.log('EX 2.4');

