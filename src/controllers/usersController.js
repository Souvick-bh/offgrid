const { User } = require("../models/User");
const { createUserSchema } = require("../validation/userSchemas");

async function createUser(req, res, next) {
  try {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: {
          message: "Invalid request body",
          details: parsed.error.flatten(),
        },
      });
    }

    const user = await User.create(parsed.data);
    return res.status(201).json({
      user: {
        id: user._id.toString(),
        name: user.name,
        number: user.number,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    // Duplicate key (e.g. email unique)
    if (err && typeof err === "object" && err.code === 11000) {
      return res.status(409).json({
        error: {
          message: "User already exists",
        },
      });
    }
    return next(err);
  }
}

module.exports = { createUser };

