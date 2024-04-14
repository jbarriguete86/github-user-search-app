export default async function getApiData(userName){
    const apiUrl = `https://api.github.com/users/${userName}`

    try {
        const res = await fetch(apiUrl)
        if(!res.ok){
            throw new Error('Network response was not ok')
        }
        const data = await res.json()
        return data
        
    } catch(err){
        return `no data retrieved`
    }
} 