const Test = require("../Models/Test");

function Get(req, res) {
  const data = req.query;

  if (data.id != null)
    Test.findById(data.id) // find by id
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else if (Object.keys(data).length > 0)
    Test.find(data) // find by parameter
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else
    Test.find({}) // get all
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
}

function Add(req, res) {
  const data = req.body;
  Test.create(data)
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
}

function Update(req, res) {
  const data = req.body;
  Test.findByIdAndUpdate(data.id, data)
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
}

function Delete(req, res) {
  const data = req.body;
  Test.findByIdAndDelete(data.id)
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
}

module.exports = { Get, Add, Update, Delete };
