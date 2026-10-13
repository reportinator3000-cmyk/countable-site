// A FILM A FRIEND WAS TEXTED (owner, Oct 13 2026).
//
// The page a text from a CountAble user opens: the film fills the screen, and
// the GET COUNTABLE button appears only when the film has played to its end.
//
// WHAT THIS PAGE DOES NOT DO, on purpose: it sets no cookie, loads nothing
// from any other site but the film itself, reads nothing from its own
// address (the link carries nothing about who sent it), and reports nothing
// to anyone. Keep it that way.
//
// THE INSTALL LINK. One place, here. Before launch it is the public
// TestFlight group; ON LAUNCH DAY it becomes the App Store listing, the same
// day `APP_LAUNCHED` flips in the app (countable-app/src/lib/app-links.ts).
var INSTALL_URL = "https://testflight.apple.com/join/h5EWXXvv";
var FILMS = "https://kqvcpcxcmgafbhjdjnak.supabase.co/storage/v1/object/public/videos/";

(function () {
  var stage = document.getElementById("stage");
  var file = stage.getAttribute("data-file");
  var film = document.getElementById("film");
  var sound = document.getElementById("sound");
  var fill = document.getElementById("fill");
  var track = document.getElementById("track");
  var end = document.getElementById("end");
  var gone = document.getElementById("gone");
  document.getElementById("get").setAttribute("href", INSTALL_URL);

  // A phone will not play sound until the page is touched, so the film
  // starts silent and the pill says how to hear it.
  film.muted = true;
  film.src = FILMS + file + ".mp4";
  var started = film.play();
  if (started && started.catch) started.catch(function () { sound.lastChild.textContent = "TAP TO PLAY"; });

  function fromTheTopWithSound() {
    film.muted = false;
    film.currentTime = 0;
    end.classList.remove("on");
    track.classList.remove("hide");
    sound.classList.add("hide");
    var p = film.play();
    if (p && p.catch) p.catch(function () {});
  }
  sound.addEventListener("click", function (e) { e.stopPropagation(); fromTheTopWithSound(); });
  film.addEventListener("click", function () {
    if (film.muted) { fromTheTopWithSound(); return; }
    if (film.ended || end.classList.contains("on")) return;
    if (film.paused) film.play(); else film.pause();
  });
  film.addEventListener("timeupdate", function () {
    if (film.duration > 0) fill.style.width = Math.min(100, (film.currentTime / film.duration) * 100) + "%";
  });
  film.addEventListener("ended", function () {
    track.classList.add("hide");
    sound.classList.add("hide");
    end.classList.add("on");
    // A film may fade to black on its very last frame. Step back to the last
    // picture so the button arrives over the film, not over nothing.
    if (film.duration > 2) film.currentTime = film.duration - 0.9;
  });
  document.getElementById("again").addEventListener("click", fromTheTopWithSound);
  film.addEventListener("error", function () {
    film.classList.add("hide"); sound.classList.add("hide"); track.classList.add("hide");
    gone.style.display = "flex";
    end.classList.add("on");
  });
})();
