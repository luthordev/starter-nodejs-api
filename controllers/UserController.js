const message = require("../messages");
const validate = require("../utils/validate");
const db = require("../utils/db");

async function Get(req, res) {
  const data = req.query;
  const isMany = Object.values(data).some((value) => typeof value === "object");

  if (Object.keys(data).length === 0) {
    const result = await db.users.findMany({});
    return res.send(result);
  }

  const result = isMany
    ? await db.users.findMany({ where: data })
    : await db.users.findUnique({ where: data });

  res.send(result);
}

async function Add(req, res) {
  const data = req.body;

  const check = validate(data, {
    name: "string",
    username: "string",
    password: "string",
  });

  if (!check.valid)
    return res.send({ status: "failed", message: check.message });

  const result = await db.users.create({ data });

  res.send(result);
}

async function Update(req, res) {
  const id = req.params.id;
  const data = req.body;

  if (!id)
    return res.send({ status: "failed", message: message.PARAMS_ID_REQUIRED });

  const result = await db.users.update({ where: { id }, data });

  res.send(result);
}

async function Delete(req, res) {
  const id = req.params.id;

  if (!id)
    return res.send({ status: "failed", message: message.PARAMS_ID_REQUIRED });

  const result = await db.users.delete({ where: { id } });

  res.send(result);
}

module.exports = { Get, Add, Update, Delete };
