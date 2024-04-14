import getUserInfo from "./components/getUserInfo.js"

const cardContainer = document.querySelector(".info--container")
let username=""



async function renderCard(profile){
    cardContainer.innerHTML = "Getting information for you...";
    const card = await getUserInfo(profile);
    cardContainer.innerHTML = card ? card : "User not found... try again"

}



await renderCard('octocat')

