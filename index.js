function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = Thankyou, ${names[i]}, for the wonderful ${eventName} gift!;
        messages.push(message);
    }
    return messages;
}

function countDown(startingNumber) {
    let currentNumber = startingNumber;
    while (currentNumber >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }
}

countDown(10);