const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
const message = require("../messages");

const models = {};

Object.keys(prisma).forEach((key) => {
  if (!key.includes("_") && !key.includes("$")) {
    models[key] = {
      findUnique: createPrismaWrapper(prisma[key].findUnique),
      findUniqueOrThrow: createPrismaWrapper(prisma[key].findUniqueOrThrow),
      findMany: createPrismaWrapper(prisma[key].findMany),
      upsert: createPrismaWrapper(prisma[key].upsert),
      aggregate: createPrismaWrapper(prisma[key].aggregate),
      groupBy: createPrismaWrapper(prisma[key].groupBy),
      count: createPrismaWrapper(prisma[key].count),
      create: createPrismaWrapper(prisma[key].create),
      createMany: createPrismaWrapper(prisma[key].createMany),
      update: createPrismaWrapper(prisma[key].update),
      updateMany: createPrismaWrapper(prisma[key].updateMany),
      delete: createPrismaWrapper(prisma[key].delete),
      deleteMany: createPrismaWrapper(prisma[key].deleteMany),
    };
  }
});

function createPrismaWrapper(prismaMethod) {
  return async (param) => {
    try {
      const result = await prismaMethod(param);
      if (result) {
        return {
          status: "success",
          result,
        };
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const promises = Object.keys(message.PRISMA_ERRORS).map(
          (errCode) => {
            if (e.code === errCode) {
              return {
                status: "failed",
                code: errCode,
                message: message.PRISMA_ERRORS[errCode],
                ...e.meta,
              };
            }
          }
        );
        const errors = await Promise.all(promises);
        return errors.find((error) => error !== undefined);
      } else {
        return {
          status: "failed",
          message: message.UNKNOWN_ERROR,
        };
      }
    }
  };
}

module.exports = models;
