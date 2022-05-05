const reverse = require('./reverse');


test("Reverse of 'Hello' equal to 'olleH'", () => {
    expect(reverse("Hello")).toBe("olleH");
});

test("Reverse of 'Master' equal to 'retsaM'", () => {
    expect(reverse("Master")).toBe("retsaM");
});
