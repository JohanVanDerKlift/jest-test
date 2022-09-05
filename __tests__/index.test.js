function add(num1, num2){
    return num1 + num2;
}

test('The add function adds two numbers and returns the sum', () => {
    // Arange
    const number1 = 5;
    const number2 = 10;

    // Act
    const sum = add(number1, number2);

    // Assert
    expect(sum).toBe(15);
})
