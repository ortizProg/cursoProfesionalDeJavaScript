// Obtener elementos del DOM

const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {

    this.media = config.el;

}

MediaPlayer.prototype.play = function() {

    this.media.play();

}
MediaPlayer.prototype.pause = function() {

    this.media.pause();

}
MediaPlayer.prototype.paused = function() {

    const estado = this.media.paused;
    return estado;

}


const player = new MediaPlayer({el: video});



button.addEventListener("click", () => {

    if(player.paused() === true) {

        player.play();

    } else {

        player.pause();

    }

});
