let index = 0;//for getting the question index
let rightAnswer = 0;
let wrongAnswer = 0;

if (index == 0) {
    let questionHTML = "";
    questionHTML += `
        <div>
            <p>${question[index].quest}</p>
            <input type="radio" name="quest" value=${question[index].option.one}>
            <label for="">${question[index].option.one}</label>
            <input type="radio" name="quest" value=${question[index].option.two}>
            <label for="">${question[index].option.two}</label>
            <input type="radio" name="quest" value=${question[index].option.three}>
            <label for="">${question[index].option.three}</label>
            <input type="radio" name="quest" value=${question[index].option.four}>
            <label for="">${question[index].option.four}</label>
            <button onclick="submit()">Submit</button>
    
        </div>
        `;

    document.querySelector("#questions").innerHTML = questionHTML;
}

function submit() {
    const submitOptionValue = document.querySelector('input[name="quest"]:checked').value;
    if (submitOptionValue === question[index].rightAnswer) rightAnswer++;
    else wrongAnswer++;
    index++;
    display();
}
function display() {
    if (index < question.length) {
        let questionHTML = "";
        for (let i = index; i < index + 1; i++) {
            questionHTML += `
        <div>
            <p>${question[i].quest}</p>
            <input type="radio" name="quest" value=${question[i].option.one}>
            <label for="">${question[i].option.one}</label>
            <input type="radio" name="quest" value=${question[i].option.two}>
            <label for="">${question[i].option.two}</label>
            <input type="radio" name="quest" value=${question[i].option.three}>
            <label for="">${question[i].option.three}</label>
            <input type="radio" name="quest" value=${question[i].option.four}>
            <label for="">${question[i].option.four}</label>
            <button onclick="submit()">Submit</button>
    
        </div>
        `;
        }
        document.querySelector("#questions").innerHTML = questionHTML;
    }
    else {
        document.body.innerHTML = `Quiz Over and right answer is ${rightAnswer} and wrong answer is ${wrongAnswer}`
    }
}
