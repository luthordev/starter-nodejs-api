const TestController = require("./Controllers/TestController");

const routes = [
  {
    method: "get",
    path: "/test/get",
    controller: TestController.Get,
  },
  {
    method: "post",
    path: "/test/add",
    controller: TestController.Add,
  },
  {
    method: "put",
    path: "/test/update",
    controller: TestController.Update,
  },
  {
    method: "post",
    path: "/test/delete",
    controller: TestController.Delete,
  },
];

module.exports = routes;
