let idPokeAPI = null;

async function getData (idPokeAPI){
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${idPokeAPI}`)
    data = await res.json();
    console.log(data);
    render();
}


document.getElementById("bulbasaur").addEventListener('click', function(){
    idPokeAPI = 1;
    getData(idPokeAPI);
});

document.getElementById("charmander").addEventListener('click', function(){
    idPokeAPI = 4;
    getData(idPokeAPI);
});

document.getElementById("squirtle").addEventListener('click', function(){
    idPokeAPI = 7;
    getData(idPokeAPI);
});


function render(){
    document.getElementById('ShowPoke').innerHTML = ``;
    const PokeData = document.createElement('div');
    PokeData.innerHTML =
    `  <img alt="gif poke" src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}">
                            <div class="PokeData">
                                <h3>${data.name}</h3>
                                <div class="PokeInfo">
                                    <div>
                                        <h4>Height</h4>
                                        <p>${data.height} m</p>
                                    </div>
                                    <div>
                                        <h4>Weight</h4>
                                        <p>${data.weight} kg</p>
                                    </div>
                                    <div>
                                        <h4>Type</h4>
                                        <p>${data.types[0].type.name}</p>
                                    </div>
                                </div>
                                <button onclick="Involve()" class="InvBoton">Involve</button>
                                <button onclick="Evolve()" class="EvoBoton"">Evolve</button>
                            </div>
                        `;
    document.getElementById('ShowPoke').appendChild(PokeData);

}

    function Evolve() {
        if(idPokeAPI == 1 || idPokeAPI == 2 || idPokeAPI == 4 || idPokeAPI == 5 || idPokeAPI == 7 || idPokeAPI == 8){
            getData(++idPokeAPI);
        }
    }
    
    function Involve() {
        if(idPokeAPI == 2 || idPokeAPI == 3 || idPokeAPI == 5 || idPokeAPI == 6 || idPokeAPI == 8 || idPokeAPI == 9){
            getData(--idPokeAPI);
        }
    }