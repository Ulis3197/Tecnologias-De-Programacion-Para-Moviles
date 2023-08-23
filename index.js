function name(name){
    console.log(name);
}
name("Ulises");


const lastName = (last) =>{
    console.log(last);
}
lastName("Rojas Ferreyra");

const comp = (a,b) => {
    if(a==b){
        return true
    }
    else{
        return false
    }
};
console.log(comp(2, "2"));

const comp2 = (a,b) => {
    if(a===b){
        return true
    }
    else{
        return false
    }
};
console.log(comp2(2, "2"));

const x = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i<x.length; i++){
//     console.log(x[i]);
// }

// x.forEach((element) => {
//     console.log(element);
// });

// const y = x.map((element) => {
//     return element * 2;
// });
// console.log(y);

const z = x.filter((element) => element % 2 === 0);
console.log(z);

async function logMovies() {
    const response = await fetch("https://rickandmortyapi.com/api/character/159");
    const algo = await response.json();
    console.log(algo);
}

logMovies();
  