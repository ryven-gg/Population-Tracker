let basePopulation = 8201000000; // Data
let netGrowthPerSecond = 2.47;

let birthRatePerSecond = 4.3;
let deathRatePerSecond = 1.83; //

let baseTime = new Date("2025-07-01T00:00:00Z").getTime();

function updateCounters() {
  let now = Date.now();
  let secondsElapsed = (now - baseTime) / 1000;

  let currentPopulation = basePopulation + (netGrowthPerSecond * secondsElapsed);
  let totalBirths = birthRatePerSecond * secondsElapsed;
  let totalDeaths = deathRatePerSecond * secondsElapsed;

  document.getElementById("counter").innerText = currentPopulation.toLocaleString("en-US", {
    maximumFractionDigits: 0
  });

  document.getElementById("births").innerText = Math.floor(totalBirths).toLocaleString("en-US");
  document.getElementById("deaths").innerText = Math.floor(totalDeaths).toLocaleString("en-US");
}

updateCounters();
setInterval(updateCounters, 100);
