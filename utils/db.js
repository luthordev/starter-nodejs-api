const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
const message = require("../messages");

let models = {};

Object.keys(prisma)
  .filter((p) => !p.includes("_") && !p.includes("$"))
  .map((key) => {
    models[key] = {
      findUnique: async (param) => {
        try {
          let result = await prisma[key].findUnique(param);
          if (result)
            return {
              status: "success",
              result,
            };

            return {
              status: "failed",
              message: message.GET_NOT_FOUND,
            };
        } catch (e) {
          console.log(e);
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      findUniqueOrThrow: async (param) => {
        try {
          let result = await prisma[key].findUniqueOrThrow(param);

          if (result)
            return {
              status: "success",
              result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      findMany: async (param) => {
        try {
          let result = await prisma[key].findMany(param);

          if (result)
            return {
              status: "success",
              result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      upsert: async (param) => {
        try {
          let result = await prisma[key].upsert(param);

          if (result)
            return {
              status: "success",
              result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      aggregate: async (param) => {
        try {
          let result = await prisma[key].aggregate(param);

          if (result)
            return {
              status: "success",
              result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      groupBy: async (param) => {
        try {
          let result = await prisma[key].groupBy(param);

          if (result)
            return {
              status: "success",
              result,
            };
        } catch (e) {
          console.log(e);
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      count: async () => {
        try {
          let result = await prisma[key].count();

          if (result)
            return {
              status: "success",
              count: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      create: async (param) => {
        try {
          let result = await prisma[key].create(param);

          if (result)
            return {
              status: "success",
              message: message.ADD_SUCCESS,
              created_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      createMany: async (param) => {
        try {
          let result = await prisma[key].createMany(param);

          if (result)
            return {
              status: "success",
              message: message.ADD_SUCCESS,
              created_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      update: async (param) => {
        try {
          let result = await prisma[key].update(param);

          if (result)
            return {
              status: "success",
              message: message.UPDATE_SUCCESS,
              updated_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      updateMany: async (param) => {
        try {
          let result = await prisma[key].updateMany(param);

          if (result)
            return {
              status: "success",
              message: message.UPDATE_SUCCESS,
              updated_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      delete: async (param) => {
        try {
          let result = await prisma[key].delete(param);
          console.log(result);
          if (result)
            return {
              status: "success",
              message: message.DELETE_SUCCESS,
              deleted_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
      deleteMany: async (param) => {
        try {
          let result = await prisma[key].deleteMany(param);

          if (result)
            return {
              status: "success",
              message: message.DELETE_SUCCESS,
              deleted_Data: result,
            };
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const promises = Object.keys(message.PRISMA_ERRORS).map(
              (errCode, i) => {
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
          } else
            return {
              status: "failed",
              message: message.UNKNOWN_ERROR,
            };
        }
      },
    };
  });

module.exports = models;
