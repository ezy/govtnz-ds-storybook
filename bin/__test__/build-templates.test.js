import { templateType } from "../build-templates";

describe('template type', () => {
  it("formats the template type", () => {
    const vueTemplate = templateType('vue', 'jest');
    console.log(templateType('vue', 'jest'));
    // expect(vueTemplate).toEqual('vue/jest.js');
  });
});