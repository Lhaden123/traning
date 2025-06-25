const fs = require("node:fs/promises");

const readFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const writeFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { readFile, writeFile };
