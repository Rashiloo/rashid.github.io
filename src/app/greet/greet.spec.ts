import { greet } from "./greet";
describe("greet", () => {
  // greet suit
  it("should include the name in the message ", () => {
    expect(greet("rashid")).toContain("rashid");
  });
});
