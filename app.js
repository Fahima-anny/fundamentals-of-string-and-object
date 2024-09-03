// let country = 'Bangladesh'
// let division = [1, 2, 3, 4, 5, 6, 7]
// console.log(country.length)
// console.log(division.length)
// console.log(country)
// console.log(division)
// division[0] = 10
// country[0] = 'v'
// console.log(country)
// console.log(division)
// let mySchool = "LMC"
// let frndSchool = "lmc"
// if(mySchool.toLowerCase() === frndSchool.toLowerCase()){
//     console.log("arre bandhubiiiii")
// }
// else{
//     console.log("tui keda")
// }
// let name1 = "anny "
// let name2 = " anny"
// if(name2.trim() === name1.trim() ){
//     console.log("same person")
// }
// else{
//     console.log("tui keda")
// }

// let myName ="Fahima Akter"
// console.log(myName.slice(0,4))
// console.log(myName.split(" "))
// console.log(myName.split("a"))
// console.log(myName.split(""))

// let name = ["fahi", "falu", "ichu"]
// console.log(name.join(" "))
// console.log(name.join("-"))

// let name1 = "Fahima"
// let name2 = "Akter"
// console.log(name1.concat(" ").concat(name2))

// console.log(name1.includes("a"))
// console.log(name1.includes("x"))

// let myName ="Fahima Akter"
// let rev = ''
// for(let word=0 ; word<myName.length ; word++){
//     rev = myName[word] + rev
// }
// console.log(rev)
// let rev2 = ''
// for(let word of myName){
// rev2 = word + rev2 ;
// }
// console.log(rev2)

// let rev3 = myName.split('').reverse().join('')
// console.log(rev3)

// let cat = {
//     name: "ati kiti ku",
//     age: 2,
//     color: "orange",
//     food: [ "mach" , "vat" , "haddi" ],
//     loveLanguage: function(){
//         console.log("ghesa ghesi kora") ;
//     }
// }

// cat.loveLanguage() ;

// let obj = {
//     "fav places": [ "coxs bazar" , "kua kata" ] ,
//     "tour-Plan": true ,
//     '#day': 7 , 
//     agreeOrNot: 'yes'
// }
// console.log(obj['#day'])
// console.log(obj['fav places'][0])
// console.log(obj['tour-Plan'])

// obj['#day'] = 10

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// delete obj.agreeOrNot
// console.log(obj)

// let shopping = {
//     price: 20000,
//     brand: "samsung",
//     name: "max pro",
//     camera: "12mpx"
// }
// for(let prop in shopping){
//     console.log(prop ,"=", shopping[prop])
// }

// const keys = Object.keys(shopping)
// console.log(keys)
// for(let key of keys){
//     console.log(key, '=' , shopping[key])
// }

// const newObj1 = new Object() ;
// console.log(newObj1)

// const newObj2 = Object.create({})
// console.log(newObj2) 
//  newObj2['name']='fahima' ;
// console.log(newObj2)
// hw 

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod'])

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car["passenger capacity"] = 5

// console.log(car)

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let totalProp = 0
// for(let prop in student){
//     totalProp = totalProp + 1
// }
// console.log(totalProp)

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
//     };
// for(let prop in myObject){
//     console.log(`key: ${prop} | type: ${typeof myObject[prop]}`)
// }

// let string = 'anisa'
// let result = string.includes('a')
// let result2 = string.split('a')
// let numberOfA = result2.length - 1
// console.log(result)
// console.log(result2)
// console.log(numberOfA)

// let String = 'Anisa'
// let stringInLowerCase = String.toLowerCase()
// // console.log(stringInLowerCase)
// let containsA = stringInLowerCase.split('a').length -1
// console.log(containsA)

// let string = 'anny'
// if(string.includes('a')){
//     console.log('contains a') ;
// }
// if(string.includes('e')){
//     console.log('contains e') ;
// }
// if(string.includes('i')){
//     console.log('contains i') ;
// }
// if(string.includes('o')){
//     console.log('contains o') ;
// }
// if(string.includes('u')){
//     console.log('contains u') ;
// }

// let string = 'xtring'
// if(string.includes('x')){
//     let newString = string.replace('x','y')
//     console.log(newString)
// }
// if(string.includes('X')){
//     let newString = string.replace('X','Y')
//     console.log(newString)
// }

// let sect = 'this is a lowercase sentence'
// let allNewStr = sect.split(' ')
// let uppedSectArray = []
// for(let newStr of allNewStr){
    // console.log(newStr)
    // let firstStr = newStr[0].toUpperCase()
    // console.log(firstStr)
    // let uppedStr = newStr.replace(newStr[0],firstStr)
    // console.log(uppedStr)
// uppedSectArray.push(uppedStr)
// }
// console.log(uppedSectArray)
// let firstLetterUppercaseSect = uppedSectArray.join(' ')
// console.log(firstLetterUppercaseSect)




let given = 'this is given'
let givenArray = given.split(' ')
console.log(givenArray)
let modifiedArray = []
for(let x of givenArray){
console.log(x)
let newX = x.replace(x[0],x[0].toUpperCase())
console.log(newX)
modifiedArray.push(newX)
}
console.log(modifiedArray)
let modifiedSentence = modifiedArray.join(' ')
console.log(modifiedSentence)




































