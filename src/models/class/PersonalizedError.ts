export default class PersonalizedError extends Error {
  constructor() {
    super("The value given is not a number!");
  }
}
