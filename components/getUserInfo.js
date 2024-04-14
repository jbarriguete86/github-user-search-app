import getApiData from "./getApiData.js"

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

export default async function getUserInfo(profile){
    const user = await getApiData(profile)

    const {created_at, avatar_url, name, login, bio, public_repos, followers, following, location, blog, twitter_username} = user

    const date = formatDate(created_at)
    
    return `
    <div class="logo--info">
        <img src=${avatar_url} alt="avatar of the user"/>
        <div>
            <p>${name}</p>
            <p>@${login}<p>
            <p>Joined ${date}</p>
        </div>
    </div>
    <p class="bio">${bio ? bio : "This profile has no bio"}</p>

    <div class="stats--info">
        <div class="stats--inner">
            <p>Repos</p>
            <p>${public_repos}</p>
        </div>

        <div class="stats--inner">
            <p>Followers</p>
            <p>${followers}</p>
        </div>

        <div class="stats--inner">
            <p>Following</p>
            <p>${following}</p>
        </div>
    </div>

    <div class="location--info">
        <div class="location--inner">
            <img src="./assets/icon-location.svg" alt="location icon"/>
            <p>${location}</p>
        </div>

        <div class="location--inner">
            <img src="./assets/icon-blog.svg" alt="location icon"/>
            <p>${blog}</p>
        </div>

        <div class="location--inner">
            <img src="./assets/icon-twitter.svg" alt="location icon"/>
            <p>${twitter_username ? twitter_username : "Not Available"}</p>
        </div>

        <div class="location--inner">
            <img src="./assets/icon-company.svg" alt="location icon"/>
            <p> @github </p>
        </div>
    <div>
    `
}

