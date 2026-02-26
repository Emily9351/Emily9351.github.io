const cache = {}; // caching API responses
let currentPokemon = null;

// Fetch Pokemon Data
async function fetchPokemon() {
    const query = document.getElementById("pokemonInput").value.toLowerCase().trim();
    if (!query) return;

    if (cache[query]) {
        displayPokemon(cache[query]);
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) throw new Error("Pokemon not found");

        const data = await response.json();
        cache[query] = data; // cache response
        displayPokemon(data);

    } catch (err) {
        alert("Error fetching Pokemon: " + err.message);
    }
}

// Display Pokemon Image, Audio, Moves Dropdowns
function displayPokemon(data) {
    currentPokemon = data;

    const display = document.getElementById("pokemonDisplay");
    const moveContainer = document.getElementById("moveSelectors");

    display.innerHTML = "";

    // Pokemon Image
    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    display.appendChild(img);

    // Pokemon Audio (cry)
    const audio = document.createElement("audio");
    audio.controls = true;
    const pokemonId = data.id;
    audio.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
    display.appendChild(document.createElement("br"));
    display.appendChild(audio);

    // Moves Dropdowns
    moveContainer.innerHTML = "<h4>Select 4 Moves</h4>";
    const moves = data.moves.map(m => m.move.name);

    for (let i = 0; i < 4; i++) {
        const select = document.createElement("select");
        select.className = "moveSelect";

        const defaultOption = document.createElement("option");
        defaultOption.text = "Choose move";
        defaultOption.value = "";
        select.appendChild(defaultOption);

        moves.forEach(move => {
            const option = document.createElement("option");
            option.value = move;
            option.text = move;
            select.appendChild(option);
        });

        moveContainer.appendChild(select);
        moveContainer.appendChild(document.createElement("br"));
    }
}

// Add Pokemon to Team
const team = [];

function addToTeam() {
    if (!currentPokemon) return;

    const selectedMoves = Array.from(document.querySelectorAll(".moveSelect"))
        .map(sel => sel.value)
        .filter(v => v);

    const teamMember = {
        name: currentPokemon.name,
        image: currentPokemon.sprites.front_default,
        moves: selectedMoves.slice(0, 4)
    };

    team.push(teamMember);
    renderTeam();
}

// Render Team Display
function renderTeam() {
    const teamDisplay = document.getElementById("teamDisplay");
    teamDisplay.innerHTML = "";

    team.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card";

        card.innerHTML = `
            <h4>${member.name}</h4>
            <img src="${member.image}" width="120"><br>
            <strong>Moves:</strong>
            <ul>
                ${member.moves.map(m => `<li>${m}</li>`).join("")}
            </ul>
        `;

        teamDisplay.appendChild(card);
    });
}

// Event Listeners
document.getElementById("fetchBtn").addEventListener("click", fetchPokemon);
document.getElementById("addTeamBtn").addEventListener("click", addToTeam);