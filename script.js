const userInput = document.querySelector('input');
const form = document.querySelector('form');
const wordLists = document.querySelector('.dictionaryList');
const error = document.querySelector('.error');
let ListArray = [];

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    if(userInput.value.length == '' || userInput.value.length == undefined){
        error.innerText = `The input field cannot be empty`;
    }else{
        error.innerText ='';
        printLetters(userInput.value).forEach((word,i) => {
            const list = document.createElement('li');
            if(ListArray.length >50){
                error.innerText = 'please wait while your result loads...';
                setTimeout(()=>{
                    error.innerText = '';
                    list.textContent = `${i+1} ~~~~~~~~ ${word}`;
                    wordLists.append(list);
                    ListArray = []
                },5000)
            }else{
                list.textContent = `${i+1} ~~~~~~~~ ${word}`;
                wordLists.append(list);
                ListArray = []
            }
        });
    }
    userInput.value = '';
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