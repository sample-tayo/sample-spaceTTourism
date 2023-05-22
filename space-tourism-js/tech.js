const firstCircle = document.getElementById("circle-01");
const secondCircle = document.getElementById("circle-02");
const thirdCircle = document.getElementById("circle-03");
const h2 = document.querySelector(".two");
const pageMessage = document.querySelector(".three");

function changeImage(newImageSrc, newImageAlt) {
  const image = document.querySelector("#img");
  image.src = newImageSrc;
  image.alt = newImageAlt;
}
firstCircle.addEventListener("click", function (e) {
  h2.textContent = "LUNCH VEHICLE";
  pageMessage.textContent =
    "A lunch vehicle or carrier rocket- propelled vehicle used to carry a payload from earth surface to space, usually to earth orbit or beyound.Our WEB-X carrier rocket is the most powerful in operations.Standing 150meters tall.It's quite an awe-inspiring sight on the launch pad!";

  changeImage(
    "/assets/technology/image-launch-vehicle-portrait.jpg",
    "Lunch Vehicle"
  );
});

secondCircle.addEventListener("click", function (e) {
  h2.textContent = "SPACEPORT";
  pageMessage.textContent =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

  changeImage("/assets/technology/image-spaceport-portrait.jpg", "Spaceport");
});

thirdCircle.addEventListener("click", function (e) {
  h2.textContent = "SPACE CAPSULE";
  pageMessage.textContent =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

  changeImage(
    "/assets/technology/image-space-capsule-portrait.jpg",
    "space capsule"
  );
});
const ham = document.querySelector("#ham");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");

ham.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
