import operate from "../components/logic/operate";

test('should make some operations' , () => {
    const sum = operate ('2' , '2' , '+');
    expect(sum).toBe("4");
});

it('should be 0' , () => {
    const sum = operate ('2' , '2' , '-');
    expect(sum).toBe("0");
});

it('should be 10' , () => {
    const sum = operate ('20' , '2' , '÷');
    expect(sum).toBe("10");
});

it('should be 10' , () => {
    const sum = operate ('20' , '2' , 'x');
    expect(sum).toBe("40");
});