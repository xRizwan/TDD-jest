const cipher = require("./caesar");

test("cipher1", () => {
    expect(cipher("a", 1))
    .toBe("b")
})

test("cipher2", () => {
    expect(cipher("z", 1))
    .toBe("a")
})


test("cipher3", () => {
    expect(cipher("a", 26))
    .toBe("a")
})

test("cipher4", () => {
    expect((cipher("hello how are you", 25)))
    .toBe("gdkkn gnv zqd xnt")
})

test("cipher5", () => {
    expect((cipher("hello how are you".toUpperCase(), 25)))
    .toBe("gdkkn gnv zqd xnt".toUpperCase())
})

test("cipher6", () => {
    expect((cipher("hello, HOW are YOU", 25)))
    .toBe("gdkkn, GNV zqd XNT")
})