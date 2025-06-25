// function formatPerson(person) {
//     return `Hello ${person.name} you are ${person.age} years old and enjoys ${person.hobbies}`
// }
// module.exports = {formatPerson};

// const bottle ={abc:["bliser","kurjy Drupchu"]};
// module.exports=bottle;

const fs = require("node:fs");

const appendContentWithDate = (fileName, encoding, newContent, err) => {
  fs.readFile(fileName, encoding, (error, previousContent) => {
    if (error) {
      err("read", error);
      return;
    }
    fs.writeFile(
      fileName,
      `${previousContent}
            --------------${new Date().toISOString()}------------
            ${newContent}`,
      (writeError) => {
        if (writeError) {
          errorCallback("write", error);
        }
      }
    );
  });
};
module.exports = { appendContentWithDate };
