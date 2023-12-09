console.log("hii ravi");

const btnE1 = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")
const apikey = "HU9r+71siCAHYgWTwzEL7g==pac77EBh7Tta2t7t";
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const option= {
    method: "GET",
    headers: {
       "X-Api-Key" : apikey,
    },
};
async function getjoke(){


try {
    jokeE1.innerText="Updating....";
    btnE1.disabled =  true;
    btnE1.innerText= "Loading......";
        const response = await fetch(apiURL, option)
    const data = await response.json()

    btnE1.disabled =  false;
    btnE1.innerText= "Tell me a joke";
    jokeE1.innerText = data[0].joke;

} catch (error) {
    btnE1.innerText="An error happend.....try agian later :)"
    btnE1.disabled =  false;
    btnE1.innerText= "Loading......";
    console.log(error);
    
}
}



btnE1.addEventListener("click", getjoke)