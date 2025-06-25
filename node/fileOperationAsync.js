const fs = require("node:fs/promises");
const path = require("node:path");

async function fileOperations(){
    try{
        const file = "tasks.txt";
        const folder = "AsyncFolder";
        const filepath = path.join(folder.file);
        await fs.mkdir(folder);
        await fs.writeFile(filepath, "Task 1:learn Node.js Fs module.");
        await fs.appendFile(filepath, "\nTask 2: practice more examples.");
        const data = await fs.readFile(filepath, "utf-8");
        console.log(data);
        await fs.unlink(filepath);
        await fs.rmdir(folder);
    } catch (err){
        console.log(err);
    }
}