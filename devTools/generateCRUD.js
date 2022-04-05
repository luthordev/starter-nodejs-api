const fs = require("fs");
const path = require("path");

function isExist(file){
  try {
    file = path.join(__dirname, "../" + file);
    return fs.statSync(file).isFile();
  } catch (err) {
    return false;
  }
};

function contentModel(name){
  return `const {model, Schema} = require("mongoose");

const ${name} = model(
  "${name}",
  new Schema({
      column1: String,
      column2: Number,
      column3: Date,
  })
);

module.exports = ${name};`;
};

function contentController(name){
  return `const ${name} = require("../Models/${name}");

function Get(req, res){
    const data = req.query;

    if (data.id != null)
        ${name}.findById(data.id) // find by id
        .then((response) => {
            res.send({ status: "success", result: response });
        })
        .catch((err) => {
            res.send({ status: "failed", message: err });
        });
    else if (Object.keys(data).length > 0)
        ${name}.find(data) // find by parameter
        .then((response) => {
            res.send({ status: "success", result: response });
        })
        .catch((err) => {
            res.send({ status: "failed", message: err });
        });
    else
        ${name}.find({}) // get all
        .then((response) => {
            res.send({ status: "success", result: response });
        })
        .catch((err) => {
            res.send({ status: "failed", message: err });
        });
};

function Add(req, res){
    const data = req.body;
    ${name}.create(data)
        .then((response) => {
        return res.send({
            status: "success",
            message: "Data has been added.",
            data: response,
        });
        })
        .catch((err) => {
        return res.send({ status: "failed", message: err });
        });
};

function Update(req, res){
    const data = req.body;
    ${name}.findByIdAndUpdate(data.id, data)
        .then((response) => {
        return res.send({
            status: "success",
            message: "Data has been updated.",
            data: response,
        });
        })
        .catch((err) => {
        return res.send({ status: "failed", message: err });
        });
};

function Delete(req, res){
    const data = req.body;
    ${name}.findByIdAndDelete(data.id)
        .then((response) => {
        return res.send({
            status: "success",
            message: "Data has been deleted.",
            data: response,
        });
        })
        .catch((err) => {
        return res.send({ status: "failed", message: err });
        });
};

module.exports = { Get, Add, Update, Delete };

    `;
};

function generateModel(name){
  if (isExist(`./Models/${name}.js`))
    return console.log(
      `\x1b[31mModel ${name} [./Models/${name}.js] is already exist!\x1b[0m`
    );

  fs.writeFile(
    `./Models/${name}.js`,
    contentModel(name),
    { flag: "w+" },
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(
        `\x1b[32mModel ${name} [./Models/${name}.js] has been created!\x1b[0m`
      );
    }
  );
};

function generateController(name){
  if (isExist(`./Controllers/${name}Controller.js`))
    return console.log(
      `\x1b[31mController ${name} [./Controllers/${name}Controller.js] is already exist!\x1b[0m`
    );

  fs.writeFile(
    `./Controllers/${name}Controller.js`,
    contentController(name),
    { flag: "w+" },
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(
        `\x1b[32mController ${name} [./Controllers/${name}.js] has been created!\x1b[0m`
      );
    }
  );
};

function main(name){
  generateModel(name);
  generateController(name);
};

if (process.argv.length > 2) {
  main(process.argv[2]);
} else
  console.log(
    "\x1b[31mPlease provide a name for the model and controller! \n\x1b[33mexample: npm run create-crud User \x1b[0m"
  );
