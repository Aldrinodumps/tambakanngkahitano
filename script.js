function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor = getRandomColor();
  document.body.appendChild(confetti);

  confetti.animate(
    [
      { transform: "translateY(0) rotateX(0) rotateY(0)", opacity: 1 },
      {
        transform: `translateY(100vh) rotateX(${
          Math.random() * 360
        }deg) rotateY(${Math.random() * 360}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 2000 + 2000,
      easing: "cubic-bezier(.37,0,.63,1)",
    }
  ).onfinish = () => {
    confetti.remove();
  };
}

function continuousCelebration() {
  setInterval(() => {
    createFlyingBalloon();
    createConfetti();
  }, 300);
}

let audio;

function celebrate() {
  // Hide the initial heading
  const initialHeading = document.getElementById("initialHeading");
  initialHeading.style.opacity = "0";
  initialHeading.style.transform = "translateY(-50px)";

  // Show the message
  const message = document.getElementById("birthdayMessage");
  message.style.opacity = "1";
  message.style.transform = "translate(-50%, 0)";

  // Create initial flying balloons
  for (let i = 0; i < 10; i++) {
    createFlyingBalloon();
  }

  // Play birthday song
  if (!audio) {
    audio = new Audio("hbd.mp3");
    audio.loop = true;
  }
  audio.play();

  // Hide the message and show more balloons after 5 seconds
  setTimeout(() => {
    message.style.opacity = "0";
    message.style.transform = "translate(-50%, 100%)";
    for (let i = 0; i < 20; i++) {
      createFlyingBalloon();
    }
    // Show the photo and greeting
    setTimeout(() => {
      document.getElementById("photoContainer").style.opacity = "1";
    }, 1000);
  }, 5000);

  // Start continuous celebration
  continuousCelebration();
}

function createFlyingBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "flying-balloon";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.bottom = "-200px";
  balloon.style.backgroundColor = getRandomColor();

  document.body.appendChild(balloon);

  balloon.animate(
    [
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      {
        transform:
          "translateY(-120vh) rotate(" + (Math.random() * 20 - 10) + "deg)",
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 5000 + 5000,
      easing: "ease-out",
      delay: Math.random() * 2000,
    }
  ).onfinish = () => {
    balloon.remove();
  };
}

function getRandomColor() {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98FB98",
    "#DDA0DD",
    "#F0E68C",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
