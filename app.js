// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"
// Namuna("p*1") ᔍ "<p></p>"
// Namuna("li*3") ᔍ "<li></li><li></li><li></li>"

// function fun(str){
//     const [tag , son] = str.split(`*`);

//     let tags = `<${tag}></${tag}>`;
    
//     return tags.repeat(Number(son));
// }
// console.log(fun("div*2"));

// =====================================================================================================================


// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ᔍ 6
// // 1 + 2 + 3 = 6

// function yegindi(float){
//     let natija = 0;
//     for(let i = 0 ; i <= float ; i++){
//         natija += i;
//     }
//     return natija;
// }
// console.log(yegindi(10));

// ================================================================================================================

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ᔍ true

// function minmax(x , obj){
//     if(x > obj.min && x < obj.max){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(minmax(4, { min: 0, max: 5 }));

// ===============================================================================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ᔍ true

// function kv(x){
//     let y = String(x);
    
//     if((x ** 2) % (10 ** y.length) == x){
        
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(kv(25));


// =============================================================================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]

// function fun(arr){
//     for(let i = 1 ; i < arr.length ; i++){
//         arr[i] = i;
//     }
//     return arr;
// }
// console.log(fun([0, 0, 0, 0, 0]));

// ==============================================================================================================


// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati: cola fanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) ᔍ ["water"]

// function shakarsiz(arr){
//     let shakarli = ["cola" , "fanta"]
//     let natija = [];
//     for(let i of arr){
//         if(!shakarli.includes(i)){
//             natija.push(i);
//         }
//     }
//     return natija;
// }
// console.log(shakarsiz(["fanta", "cola", "water"]));

// =============================================================================================================

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ᔍ 3

// function fun(son){
//     let uzunlik = String(son);
//     return uzunlik.length;
// }
// console.log(fun(12));


// ============================================================================================================================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) ᔍ 321

// function fun(son){
//     let arr = [];
//     let str = String(son);
//     let num = "";
//     for(let  i of str){
//         arr.push(i);
//     }
//     arr = arr.reverse();
//     for(let i of arr){
//         num += i;
//     }
//     return Number(num);
// }
// console.log(fun("001"));

// ================================================================================================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) ᔍ 7


// function randomInRange(min , max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInRange(5, 9));

// ============================================================================================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// function naris(son){
//     let str = String(son);
//     let arr = [];
//     for(let i of str){
//         arr.push(Math.pow(i , 3));
//     }

//     let yegindi = 0;
//     for(let i of arr){
//         yegindi += i;
//     }

//     if(yegindi == son){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(naris(1652));

// =========================================================================================================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14

//  function harf(str){
//     let sanoq = 0;
//     for(let i of str){
//         if(i.toUpperCase() == i){
//             sanoq += 1;
//         }
//     }
//     return sanoq;
//  }
//  console.log(harf("JMZWCneOTFLWYwBWxyFw"));
 
 









