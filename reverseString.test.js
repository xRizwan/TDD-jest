let reverser = require('./reverseString');

test("Reversed String", () => {
    expect(reverser("reverse me"))
    .toBe('em esrever')
})

test("Reversed String", () => {
    expect(reverser("em esrever"))
    .toBe("reverse me")
})