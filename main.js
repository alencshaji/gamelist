const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2127218b5msh05fa287278b5aecp1f0c98jsn629a549d9ce6',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
    .then(data => data.json())
    .then(game => {
        game = game.slice(0,52)
        game.map(data => {
            const title = data.title;
            const thumbnail = data.thumbnail;
            const describ = data.short_description;
            const genre = "<b>Genre:</b> " + data.genre;
            const date = "<b>Release Date:</b> " + data.release_date;
            const developer = "<b>Developer:</b> " + data.developer;
            const linkgame = data.game_url;
            const details =
            `<div class="card">
                <img src="${thumbnail}" class="card-img-top" alt="img">
                <div class="card-body">
                    <h1 class="card-title title">${title}</h1>
                    <p class="card-text">${describ}</p>
                </div>
                <p class="list-group-item">${genre}</p>
                <p class="list-group-item">${date}</p>
                <p class="list-group-item">${developer}</p>
                <div class="card-body">
                    <a href="${linkgame}" class="card-link">To Get Game</a>
                </div>
            </div>`;
            document.querySelector(".container").innerHTML += details;
        });
    })
    .catch(error => console.error(error));
