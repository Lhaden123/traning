const fs =require("node:fs");
const utils = require("./utils");


// fs.readFile("tashi.txt", "utf-8", (err,data) =>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//   });

//   try{
//     const data = fs.readFileSync("tashi.txt", "utf-8");
//     console.log (data);
//   }catch (error){
//     console.log(error);
//   }

// fs.writeFile("Norbu.txt", "Hello I am Norbu",
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//         //file written successfully

//     }

// });

// try {
//   fs.writeFileSync("Tashi.txt", "I am 21 years old");
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile("Norbu.txt", "\n Hello I am Norbu",(err) =>{
//      if (err) {
//         console.error(err);
//       } else {
//           //file written successfully

//       }

//   });

// try{
//     fs.appendFileSync("tashi.txt", "\n I am 24 years old");
// }catch (err) {
//     console.error(err);
// }

// fs.writeFile("./lhaden/lhadenn.txt", "Hello I am Norbu",
//     (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//           //file written successfully

//       }

//   });

//   fs.writeFile("../athang.txt", "Hello I am athang",
//     (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//           //file written successfully

//       }

//   });

// const content = "\nshe went to Thimphu for it.";
// const fileName = "tashi.txt";

// utils.appendContentWithDate(fileName, "utf-8", content, (type, err) => {
//   console.log(type);
//   console.log(err);
// });

// fs.unlink("tashi.txt",(err) =>{
//     if(err){
//         console.log(err);
//     }
// });
// try{
//     fs.unlinkSync("server.js",);
// }catch (err){
//     console.log(err);
// }

// fs.mkdir("path", (err) => {
//     if(err){
//         console.log(err);
//     }
// })
// try{
//     fs.mkdirSync("path2");
// }catch(err){
//     console.log(err);
// }
// fs.mkdir("path/to/my/file",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// try{
//     fs.rmdirSync("path2");
// }catch(error){
//     console.log(error)
// }

// fs.rm("path",{recursive:true},(err)=>{
//         if(err){
//           console.log(err);

//         }
//     })
// fs.mkdir("path2",(err)=>){
//     if(err){
//         console.log(err);
//     }
// }


