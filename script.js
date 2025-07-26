// Estimasi data per 1 Juli 2025
let basePopulation = 8201000000;
let birthRatePerSecond = 4.3;
let deathRatePerSecond = 1.8;
let netGrowthPerSecond = birthRatePerSecond - deathRatePerSecond;

let baseTime = new Date("2025-07-01T00:00:00Z").getTime();

function updateCounters() {
  let now = Date.now();
  let secondsElapsed = Math.floor((now - baseTime) / 1000);

  // Total berdasarkan estimasi pertambahan sejak baseTime
  let currentPopulation = basePopulation + (netGrowthPerSecond * secondsElapsed);
  let totalBirths = birthRatePerSecond * secondsElapsed;
  let totalDeaths = deathRatePerSecond * secondsElapsed;

  // Tampilkan ke HTML
  document.getElementById("counter").innerText = currentPopulation.toLocaleString("en-US", {
    maximumFractionDigits: 0
  });

  document.getElementById("births").innerText = Math.floor(totalBirths).toLocaleString("en-US");
  document.getElementById("deaths").innerText = Math.floor(totalDeaths).toLocaleString("en-US");
}

updateCounters();
setInterval(updateCounters, 1000);
