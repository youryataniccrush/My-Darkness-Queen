const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const annotationContainer = document.querySelectorAll('.annotation');

const randomizeButtonPosition = (buttonRef) => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));

  buttonRef.style.position = 'absolute';
  buttonRef.style.left = `${x}px`;
  buttonRef.style.top = `${y}px`;
};

const showAnnotation = (annotationRef) => {
  annotationRef.style.width = 'auto';
  annotationRef.style.visibility = 'visible';
  annotationRef.style.opacity = 1;
};

const launchHeartsConfetti = () => {
  const confettiDefaults = {
    spread: 120,
    ticks: 100,
    gravity: 0.4,
    decay: 0.94,
    startVelocity: 24,
    shapes: ["heart"],
    colors: [
      "#dc143c",
      "#dc143c",
      "#dc143c",
    ],
  };

  confetti({
    ...confettiDefaults,
    particleCount: 50,
    scalar: 3,
  });

  confetti({
    ...confettiDefaults,
    particleCount: 25,
    scalar: 2,
  });

  confetti({
    ...confettiDefaults,
    particleCount: 10,
    scalar: 1,
  });
};

yesButton.addEventListener('click', () => {
  launchHeartsConfetti();
  setTimeout(() => {
    window.location.href = "https://youtu.be/kgc1UcYkhJk";
  }, 2000);
});

noButton.addEventListener('mouseover', () => {
  showAnnotation(annotationContainer[0]);
  randomizeButtonPosition(noButton);
});
