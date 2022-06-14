// function cut() {
//     console.log("开始切菜")
//     return new Promise((resolve, reject) => {
//         console.log("切菜完毕")
//         setTimeout(() => {
//             // resolve("菜")
//             reject("没菜")
//         }, 2000);
//     })
// }

// function boil() {
//     console.log("开始烧水")
//     return new Promise((resolve, reject) => {
//         console.log("烧水完毕")
//         setTimeout(() => {
//             reject("no water")

//             // resolve("水")
//         }, 1000);
//     })
// }
// //  Promise.all([cut(),boil()]).then((res) => {
// //     console.log(res)
// // },(rej)=>{
// //     console.log(rej,"then")
// // }).catch((err)=>{
// //     console.log(err,"catch") //then的第二个参数和catch都可以接收reject,then接收了reject，catch 就不会接收
// // })
// // Promise.race([cut(), boil()]).then((res) => {
// //     console.log(res)
// // }, (rej) => {
// //     console.log(rej, "then")
// // }).catch((err) => {
// //     console.log(err, "catch") //then的第二个参数和catch都可以接收reject,then接收了reject，catch 就不会接收
// // })

// //catch无法接收错误
// // new Promise((res,rej)=>{
// //     throw new Error("err")                      
// // }).catch((err)=>{
// //     console.log(err,"catch")
// // })

// // new Promise((res,rej)=>{
// //     throw new Error("err")                   
// // }).then(()=>{},(err)=>{
// //     console.log("then", err)
// // }).catch((err)=>{
// //     console.log("catch",err)
// // })

// // console.log(2 == true)
// // const p1 = new Promise((resolve, reject) => {
// //     resolve('hello');
// // }).then(result => result).catch(e => e);
// // const p2 = new Promise((resolve, reject) => {
// //     throw new Error('报错了');
// // }).then(result => result).catch(e => e);
// // Promise.all([p1, p2]).then(result => console.log(result)).catch(e => console.log(e)); // ["hello", Error: 报错了]如果p2没有自己的catch方法，就会调用Promise.all()的catch方法

// let a = {
//     test:"sdfsf",
//     tr:"sdfs"
// }
// let b = [1,2,3,3,2,7,4,2,1]
// v= b.reduce((a,b) => {
//     console.log(a,b)
//     return a +b
// })
// console.log( typeof Date.now())
// console.time()
// let [k, n] = [3, 20]
// let result = 0
// let max = 0

// if (k > n) {
//     console.log(0)
// } else {
//     for (var i = k; i <= n; i++) {
//         if (i % k === 0) {

//             let times = 0
//             let t = i
//             while (t % k === 0) {
//                 times++
//                 t = t/k
//             }

//             if (times > max) {
//                 max = times
//                 result = 1
//             } else if (times === max) {
//                 result++
//             }

//         }
//     }
//     console.log(result)
//     console.timeEnd()
// }

// console.log(new Date(),new Date().toString(),new Date().toLocaleString())
// const express = require("express")
// const app  = express()
// app.get('/test',(req,res)=>{
//     console.log("req")
//      res.send('Hello World!')
// })
// app.listen(3000,(err)=>{
//     if(err) console.log(err)
//     else console.log("服务器启动成功")
// })
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(matches.index); // 0 
console.log(matches.input); // "mom and dad and baby" 
console.log(matches[0]); // "mom and dad and baby" 
console.log(matches[1]); // " and dad and baby" 
console.log(matches[2]); // " and baby" 