const { z } = require("zod");

const createUserSchema = z.object({
  name: z.string().trim().min(1).max(120),
  number: z.string().trim().min(1).max(120),
});

module.exports = { createUserSchema };

