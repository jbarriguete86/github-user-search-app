import getUserInfo from "./components/getUserInfo.js"
import changeDarkMode from "./components/changeDarkMode.js"

const cardContainer = document.querySelector(".info--container")
const modeEl= document.querySelector('.darkMode--container')
const formInput = document.querySelector('.form--input')
const formBtn = document.getElementById('form--btn')
const resultEl = document.getElementById('result--text')

let darkMode=false
let username="octocat"
let badRequest=false

async function renderCard(profile, mode){
    cardContainer.innerHTML = "Getting information for you...";
    const card = await getUserInfo(profile, mode);
    cardContainer.innerHTML = card ? card : "User not found... try again"
    resultEl.innerHTML = !card ? "No results" : ""

}

modeEl.addEventListener('click', async()=>{
    darkMode = !darkMode
    changeDarkMode(darkMode)
    await renderCard(username, darkMode)
})

formBtn.addEventListener('click', async()=>{
    username = formInput.value
    await renderCard(username, darkMode)
    formInput.value=""
})


await renderCard(username, darkMode)

