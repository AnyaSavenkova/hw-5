function enter() {
    let string = '';
    let answer;

    for (let i = 1; ; i++) {
        answer = prompt('Enter your word', '');
        if (answer === undefined) break;

        string = string + answer;
        console.log(string);

        if (i % 3 === 0) {
            let question = confirm('Do you want to continue?');
            if (!question) break;
        }
    }
}

enter();