function rusroulette() {
  const links = [
    "https://www.google.com",
    "https://www.facebook.com",
    "https://www.youtube.com",
    "https://www.amazon.com",
    "https://www.wikipedia.org",
    "https://www.reddit.com"
  ];
  const randomLink = links[Math.floor(Math.random() * links.length)];
  window.location.href = randomLink;
}