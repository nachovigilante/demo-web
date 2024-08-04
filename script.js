const secondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

document.addEventListener("DOMContentLoaded", (event) => {
    const listaCanciones = document.getElementById("lista-canciones");

    listaCanciones.innerHTML = "Cargando...";

    fetch("http://localhost:8000/canciones")
        .then((response) => response.json())
        .then((data) => {
            listaCanciones.innerHTML = "";
            data.forEach((cancion) => {
                const li = `
                <li class="cancion">
                    <img src="./assets/song.jpg" alt="Logo del álbum">
                    <div class="info">
                        <h3>${cancion.nombre}</h3>
                        <div class="bottom">
                            <span>Artista</span>
                            <span>·</span>
                            <span>${secondsToMinutes(cancion.duracion)}</span>
                        </div>
                    </div>
                </li>`;
                listaCanciones.innerHTML += li;
            });
        });
});
