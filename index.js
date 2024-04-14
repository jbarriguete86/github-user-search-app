import getUserInfo from "./components/getUserInfo.js"

const cardContainer = document.querySelector(".info--container")
let username=""



async function renderCard(profile){
    const card = await getUserInfo(profile)
    return cardContainer.innerHTML= card

}



await renderCard('octocat')

