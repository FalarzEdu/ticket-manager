import UserController from "../../src/controllers/UserController";

let userController = new UserController();

test("verifyAuth() test true", async () => {
  const result = await userController.verifyAuth("tiago", "123");
  expect(result).toBe(true);
});

test("verifyAuth() test false", async () => {
  const result = await userController.verifyAuth("emanuel", "123");
  expect(result).toBe(false);
});
