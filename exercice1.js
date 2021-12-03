//étape 1
let nomVoiture = "peugeot";

//étape 2
let x = 50;

//étape 4
let demo = document.getElementById('demo')
let z = 5;
let w = 10;
demo.innerHTML = "z vaux " + z + ", w vaux " + w  + ", le résultat est : " + ( z + w );

//étape 5
let d = z + w;
alert(d);

//étape 6
let prenom = "John", nom = "doe" , age = 35;

//étape 7
alert( 10 * 5 );

//étape 8
alert( 10 / 2);
alert( 15 % 9 );

//étape 9
let l = 10;
let k = 5 ;
l = l + k ;

//étape 10
function maFonction(){
    alert( "Salut tout le monde !" );
}
maFonction();


//étape 11
function maFonctionDeRetour(){
    alert( "Bonjour!" );
}
window.maFonctionDeRetour();

//étape 13
let monBoutton = document.getElementById('monBoutton');
monBoutton.addEventListener('click' , function (){
    alert("alert");
});

//étape 14
let changeSurOver = document.getElementById('changeSurOver');
changeSurOver.addEventListener('mouseover', function (){
    changeSurOver.style.backgroundColor = 'red';
});

//étape 15
let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

//étape 16
let str1 = "Bonjour ";
let str2 = "le monde!";
alert( str1 + str2 );

//étape 17
let listeVoitures = [
    "Renault",
    "Volvo",
    "Citroen"
];
let maVoiture = listeVoitures[1];

//étape 18
listeVoitures[0] = "Ford";

//étape 19
alert(listeVoitures.length);

//étape 20
listeVoitures.pop();

//étape 21
listeVoitures.push("Ferrari");

//étape 22
let rNumber = Math.random();

//étape 23
let fNumber = 15.7;
Math.floor(fNumber);

//étape 24
let nombreUn = 10;
let nombreDeux = 9;
if ( nombreUn !== nombreDeux ){
    alert("nombreUn n'est pas égal à nombreDeux");
}

//étape 25
for (let i = 0; i < 9; i++){
    console.log(i);
}

//étape 26
let fruits = [
    "pomme",
    "banane",
    "poire"
];
for (let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i]);
}

//étape 27
let p = 0;
while ( p < 10 ) {
    p++;
}

//étape 28
let b = 0;
while ( b < 10 ) {
    b+=2;
}

//étape 29
for (let i = 0; i < 10; i++ ){
    if ( i === 5 ){
        console.log("fini !!");
    }
}