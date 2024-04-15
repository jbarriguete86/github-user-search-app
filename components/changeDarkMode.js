export default function changeDarkMode(mode){
    const modeEl= document.querySelector('.darkMode--container')
    const bodyEl=document.querySelector('body')
    const formContEl = document.querySelector('.form--container')
    const mainContEl = document.querySelector('.info--container')
    const formInput = document.querySelector('.form--input')
    const titleEl = document.querySelector('.title')
    
    if(mode){
        modeEl.innerHTML=`
        <p class="drkMode--iconText">Light</p>
        <img class="drkMode--icon" src="./assets/icon-sun.svg" alt="logo of the moon">
        `
        bodyEl.classList.add('drkMode--body')
        formContEl.classList.add('drkMode--cont')
        mainContEl.classList.add('drkMode--cont')
        formInput.classList.add('drkMode--input')
        titleEl.classList.add('drkMode--title')
        
  
    }  else {
        modeEl.innerHTML=`
        <p>Dark</p>
        <img src="./assets/icon-moon.svg" alt="logo of the moon">
        `
        bodyEl.classList.remove('drkMode--body')
        formContEl.classList.remove('drkMode--cont')
        mainContEl.classList.remove('drkMode--cont')
        formInput.classList.remove('drkMode--input')
        titleEl.classList.remove('drkMode--title')

    } 
}