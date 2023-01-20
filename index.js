// TASK 1
// function numsplit(n){
//     let min1 = Math.floor(n/2)
//     let max1 = Math.ceil(n/2)
//     return [min1, max1]
// }
// console.log(numsplit(-9));

// TASK 2
// let a = ["a", "ccc", "dddd", "bb"];
// let ans = a.sort(function(a, b){
//     return a.length-b.length
// })
// console.log(ans)

// TASK 3
// let n = [1, 5, 9];
// let ans = n.map(function(a){
//     return Math.pow(a, 3);
// })
// let ans1 = ans.reduce(function(a, b){
//     return a+b; 
// })
// console.log(ans1);

// TASK 4
// let n = [0, 1, false, 2, "", 3, 4];
// let ans = n.filter(function(a){
//     if(a != '0' && a != false && a!=null && a!=undefined && a!=NaN && a!=""){
//         return a
//     }
// })
// console.log(ans);

// TASK 5
// let n = [10, 40, 30, 20, 50, 50, 50, 50, 48];
// let ans = n.sort(function(a, b){
//     return a-b;
// })
// let mx = ans[ans.length-1];
// let final = ans.reverse();
// let finalans = final.find(function(a){
//     if(a!=mx){
//         return a
//     }
// })
// console.log(finalans);

// -------------------------------------------------------------------------------------------------------------

// PRACATICE 2
// TASK 1
// let n = [-300, 2, 3]
// let ans = n.find(function(a, b){
//     return a;
// })
// console.log(ans);

// TASK 2
// let n = ["cat", "dog", "duck"]
// let ans = n.pop()
// console.log(ans);

// // TASK 3
// function toMA(n, m){
//     return [n, m]
// }
// console.log(toMA(51, 21));

//TASK 4
// let a = [1, 2, 3]
// let b = 5
// let ans = a.slice(b)
// console.log(ans);

// TASK 5
// let a = [1, 2, 3, 4];
// let ans = a.reverse();
// console.log(ans);

// TASK 6
// let a = ["a", "g", "y", "d"]
// let b = "d"
// let ans = a.indexOf(b)
// console.log(ans);

// TASK 7
// let n = [1, 2, 3, 4, "ASFDSFA"];
// let ans = n.join("")
// // let ans1 = ''
// // for(let i = 0; i<ans.length; i++){
// //     if(ans[i] != ','){
// //         ans1+=ans[i]        
// //     }
// // }
// console.log(ans);

// TASK 8
// let n = [-1, 1, 3, "1"];
// let ans = n.filter(function(a){
//     return a === +a
// })
// console.log(ans);

// TASK 9
// let a = [1, 3, 5];
// let b = [2, 6, 8];
// let ans = a.concat(b)
// console.log(ans);

// TASK 10  
// let a = [4, 1000, 33, 999]


// let minx = a.sort(function(a, b){
//     return a-b;
// })
// let maxx = minx.reverse();
// let ans = maxx[maxx.length-1]
// let ans1 = minx[0]
// console.log((ans+" "+ans1));

// TASK 11
// let a = [4, null, 33, "999"]
// let ans = a.map(function(a){
//     return typeof(a)
// })
// console.log(ans);

// TASK 12
// let a = [1, 211231231, "a", "b"]
// let ans = a.map(function(a){
//     return a.toString()
// })
// console.log(ans);

// TASK 13
// let a = [1, 2, 3, 4, 5, 6]
// let ans = a.reduce(function(a, b){
//     return a+b
// })
// console.log(ans);

// TASK 14
// let a = ["Google", "Apple", "Microsoft"]
// let ans = a.sort(function(a, b){
//     return a.length-b.length
// })
// console.log(ans);

// TASK 15
// let a = null
// if(a == null || a == undefined || a.length == 0){
//     console.log("[]")
// }
// else{
//     let ans = a.sort(function(a, b){
//         return a-b
//     }   )
//     console.log(ans);
// }

// TASK 16
// let a = [true, false, false, false, true, true]
// let cnt = 0;
// let ans = a.filter(function(n){
//     if(n === true){
//         return n
//     }
// })
// console.log(ans.length);