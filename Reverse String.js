//Reverse Of A String
let msg=" Shaurya Sinha ";
let reversestr= (msg) => {
    let temp=``;
    for(let i =msg.length-1; i>=0 ; i-- ){
        let char=msg.charAt(i);
        temp += char;
    }
    return temp;
}
console.log(`The original String is ${msg} and reverse string is ${reversestr(msg)}. `)