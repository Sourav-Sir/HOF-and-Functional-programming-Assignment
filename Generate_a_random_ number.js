// 2. Generate a random number every 2 seconds
function generateRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.random();
        console.log(`2. Random Number: ${randomNumber}`);
    }, 2000);
}

generateRandomNumber();
