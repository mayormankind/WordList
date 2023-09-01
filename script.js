const userInput = document.querySelector('input');
const submitButton = document.querySelector('button');
const wordLists = document.querySelector('.dictionaryList');
const error = document.querySelector('.error');
const ListArray = [];

window.focus(userInput)

submitButton.addEventListener('click',(e) =>{
    e.preventDefault();
    if(userInput.value.length == '' || userInput.value.length == undefined){
        error.innerText = `The input field cannot be empty`;
    }else{
        error.innerText ='';
        printLetters(userInput.value).forEach((word,i) => {
            if(ListArray.length >50){
                wordLists.innerHTML = `<p>please wait while your result loads...</p>`;
                setTimeout(()=>{
                    wordLists.innerHTML += `<li>${i+1} ~~~~~~~~ ${word}</li>`;
                },5000)
            }else{
                wordLists.innerHTML += `<li>${i+1} ~~~~~~~~ ${word}</li>`;
            }
        });
    }
})
function printLetters(word,active=''){
    if(word.length == 0){
        ListArray.push(active);
        return;
    }
    for(let letter=0;letter <word.length; letter++){
        let character = word[letter];
        const lettersLeft = word.slice(0,letter) + word.slice(letter + 1)
        printLetters(lettersLeft,active + character)
    }
    return ListArray;
}