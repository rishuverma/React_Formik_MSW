import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5173/users", (req, res, ctx) => {
    console.log("the req is", req);
    return res(
      ctx.status(200),
      ctx.json([
        {
          firstName: "George",
          email: "george@gmail.com",
        },
        {
          firstName: "John",
          email: "John@gmail.com",
        },
        {
          firstName: "Smith",
          email: "smith@outlook.com",
        },
      ])
    );
  }),
];
