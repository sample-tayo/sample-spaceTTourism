const ham = document.querySelector("#ham");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");

ham.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

//DESTINATION FUNCTIONALITY

const moon = document.querySelector("main ul li:first-of-type");
const mars = document.querySelector("main ul li:nth-of-type(2)");
const europa = document.querySelector("main ul li:nth-of-type(3)");
const titan = document.querySelector("main ul li:nth-of-type(4)");
const planetMessage = document.querySelector(".planet-message");
const planet = document.querySelector(".planet");
const kilometers = document.querySelector(".kilometers");
const months = document.querySelector(".months");

function changeImage(newImageSrc) {
  const image = document.querySelector("#img");
  image.src = newImageSrc;
}

// moon.textContent = "Jupiter";
moon.addEventListener("click", function (e) {
  planet.textContent = "MOON";
  planetMessage.textContent =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. Avg. distance 384,400 km Est. travel time 3 days";
  kilometers.textContent = "384,400 KM";
  months.textContent = "3 DAYS";
  changeImage("/assets/destination/image-moon.png");

  moon.classList.add("current");
  mars.classList.remove("current");
  europa.classList.remove("current");
  titan.classList.remove("current");
});

mars.addEventListener("click", function (e) {
  mars.classList.add("current");
  planet.textContent = "MARS";
  planetMessage.textContent =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Avg. distance 225 mil. km Est. travel time 9 months";
  kilometers.textContent = "225 MIL. KM";
  months.textContent = "9 MONTHS";
  changeImage("/assets/destination/image-mars.png");
  europa.classList.remove("current");
  moon.classList.remove("current");
  titan.classList.remove("current");
});

europa.addEventListener("click", function (e) {
  europa.classList.add("current");
  planet.textContent = "EUROPA";
  planetMessage.textContent =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. Avg. distance 628 mil. km Est. travel time 3 years";
  kilometers.textContent = "628 MIL. KM";
  months.textContent = "3 YEARS";
  changeImage("/assets/destination/image-europa.png");
  mars.classList.remove("current");
  moon.classList.remove("current");
  titan.classList.remove("current");
});

titan.addEventListener("click", function (e) {
  titan.classList.add("current");
  planet.textContent = "TITAN";
  planetMessage.textContent =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. Avg. distance 1.6 bil. km Est. travel time 7 years";
  kilometers.textContent = "1.6 BIL. KM";
  months.textContent = "7 YEARS";
  changeImage("/assets/destination/image-titan.png");
  moon.classList.remove("current");
  moon.classList.remove("current");
  europa.classList.remove("current");
});
