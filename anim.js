// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I've rejected affection", time: 7.5 },
  { text: "For years and years", time: 9 },
  { text: "Now I have it, and damn it", time: 11.8 },
  { text: "It's kind of weird", time: 14 },
  { text: "He tells me I'm pretty", time: 18 },
  { text: "Don't know how to respond", time: 20 },
  { text: "I tell him that he's pretty too", time: 24 },
  { text: "Can I say that? Don't have a clue", time: 27 },
  { text: "With every passing moment", time: 30 },
  { text: "I surprise myself", time: 33 },
  { text: "I'm scared of flies", time: 35 },
  { text: "I'm scared of guys", time: 36 },
  { text: "Someone please help", time: 37.8 },
  { text: "'Cause I think I've fallen", time: 41.5 },
  { text: "In love this time", time: 45.5 },
  { text: "I blinked and suddenly, I had a valentine", time: 49 },
  { text: "What if he's the last one I kiss?", time: 78 },
  { text: "What if he's the only one I'll ever miss?", time: 84 },
  { text: "Maybe I should run, I'm only 21", time: 90 },
  { text: "I don't even know who I want to become", time: 95 },
  { text: "I've lost all control of my heartbeat now", time: 104.5 },
  { text: "Got caught in a romance with him somehow", time: 110.5 },
  { text: "I still feel a shock through every bone", time: 116 },
  { text: "When I hear an I love you", time: 122.5 },
  { text: "'Cause now I've got someone to lose", time: 123.5 },
  { text: "The first one to ever like me back", time: 128 },
  { text: "I'm seconds away from a heart attack", time: 133.4 },
  { text: "How the hell did I fall in love this time?", time: 139.5 },
  { text: "And honestly, I can't believe I get to call you mine", time: 145.5 },
  { text: "I blinked and suddenly, I had a valentine", time: 151 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);