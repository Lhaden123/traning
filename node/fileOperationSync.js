const fs =require("node:fs");

// try{
//     fs.mkdirSync("studentFolder");
// }catch (err){
//     console.log(err);
// }
// try{
//     fs.writeFileSync("./studentFolder/notes.txt","This is my first note");
// }catch (err){
//     console.log(err);
// }

try{
    fs.mkdirSync("studentFolder");
    fs.writeFileSync("notes.txt", "This is my first note.");
    fs.appendFileSync("notes.txt", "\nAdding another line to my notes.");
    
    const data = fs.readFileSync("notes.txt", "utf-8");
    console.log(data);
    fs.unlinkSync("notes.txt");
    fs.rmdirSync("studentFolder");
}catch (error){
    console.log(error);
}
