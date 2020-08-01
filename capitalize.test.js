const capitalize = require('./capitalize');

test("Capitalize", () => {
    expect(capitalize("this"))
    .toBe("This");
})

test("Capitalize", () => {
    expect(capitalize("this is"))
    .toBe("This Is");
})

test("Capitalize", () => {
    expect(capitalize("This is super amazing"))
    .toBe("This Is Super Amazing");
})

test("Capitalize", () => {
    expect(capitalize("easy testing with jest"))
    .toBe("Easy Testing With Jest");
})