const secondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const cancionDOM = (cancion) => {
    return `
    <li class="cancion">
        <img src="./assets/song.jpg" alt="Logo del álbum">
        <div class="info">
            <h3>${cancion.nombre}</h3>
            <div class="bottom">
                <span>${cancion.nombre_artista}</span>
                <span>·</span>
                <span>${secondsToMinutes(cancion.duracion)}</span>
            </div>
        </div>
    </li>`;
};

const artistaDOM = (artista) => {
    return `
    <li class="artista">
        <img src="./assets/artist.jpg" alt="Logo del artista">
        <div class="info">
            <h3>${artista.nombre}</h3>
        </div>
    </li>`;
};
