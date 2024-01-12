function getCat () {
 return fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {    
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(`Что-то пошло не так ${res.status}`)
        })
        .then(data => data[0].url)
}

function getAnimeQuote () {
    return fetch('https://animechan.xyz/api/random', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так ${res.status}`)
    })
    .catch(err => console.log(err))
}

export {getCat, getAnimeQuote}

