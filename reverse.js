const names = ['sabiha','lamia','lima','maliha'];
//console.log(name);
//let reverse = name.reverse();
//console.log(reverse);
let rev_names = [];
for(const name of names){
        rev_names.unshift(name);
}
//console.log(rev_names);
//console.log("node kano cole na");
const rev_rev_names = [];
for(let i = names.length-1 ; i >=0 ;i--){
        const name = names[i];
        console.log(name);
        rev_rev_names.push(name);
} 
console.log(rev_rev_names);