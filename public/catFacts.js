const baseUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"

const section = document.querySelector('section');


    fetch(baseUrl)
    
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);


            
        })

function displayResults(json) {
    console.log('Display Results', json);
    
    // for(let i = 0; i < json.length; i++) {
        

        // create elements to hold info
        // let quoteContainer = document.createElement('div')
        let Fact = document.createElement('p');
        let button = document.createElement('button');
        
        
        

        // set text for elements
        Fact.textContent = json.text;
        
        

        //Set class name
        Fact.className = "information";
        button.className = "AskMe"

        

        button.innerText = "Ask me something else";
        
        
        
        // append to html
        section.appendChild(Fact);
        section.appendChild(button);

        button.addEventListener('click', () => {
            
        location.reload();

        })
}
