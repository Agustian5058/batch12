let value = 5
for (let i = 1; i <= value; i++) {
    let test = "i = " + i
    for (let j = value; j > i; j--) {
        test += `   `
    }
    for (let j = 0; j < i; j++) {
        test += ` * `
    }
    for (let j = i - 2; j >= 0; j--) {
        test += ` * `
    }
    console.log(test)
}