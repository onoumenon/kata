const decodeMorse = require("./decodeMorse");

describe("decodes morse code into string", () => {
  it('returns "HEY JUDE" when ".... . -.--   .--- ..- -.. ." is given', () => {
    const morse = ".... . -.--   .--- ..- -.. .";
    expect(decodeMorse(morse)).toBe("HEY JUDE");
  });
  it('returns "SOS" when "... --- ..." is given', () => {
    const morse = "... --- ...";
    expect(decodeMorse(morse)).toBe("SOS");
  });
});
