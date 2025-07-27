// Time base = 1 Juli 2025 (Worldometer basis)
const baseTime = new Date("2025-07-01T00:00:00Z").getTime();
const basePopulation = 8201000000;

// Birth and death rate per second
const birthRate = 4.3;   // 4.3 birth per second
const deathRate = 1.8;   // 1.8 death per second

function updatePopulation() {
  const now = Date.now();
  const elapsedSeconds = Math.max(0, (now - baseTime) / 1000);
  const estimatedPopulation = Math.floor(basePopulation + (birthRate - deathRate) * elapsedSeconds);
  const estimatedBirths = Math.floor(birthRate * elapsedSeconds);
  const estimatedDeaths = Math.floor(deathRate * elapsedSeconds);

  document.getElementById("counter").textContent = estimatedPopulation.toLocaleString();
  document.getElementById("births").textContent = estimatedBirths.toLocaleString();
  document.getElementById("deaths").textContent = estimatedDeaths.toLocaleString();
}

setInterval(updatePopulation, 1000);
updatePopulation();

// Navigation
function navigate(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Historical Chart
const historyCtx = document.getElementById("historyChart").getContext("2d");
new Chart(historyCtx, {
  type: "line",
  data: {
    labels: ["1800", "1850", "1900", "1950", "2000", "2025"],
    datasets: [{
      label: "World Population (Billion)",
      data: [1, 1.2, 1.6, 2.5, 6.1, 8.2],
      borderColor: "#00ff99",
      backgroundColor: "rgba(0, 255, 153, 0.2)",
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#00ff99"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#00ff99"
        }
      },
      x: {
        ticks: {
          color: "#00ff99"
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "#00ff99"
        }
      }
    }
  }
});

// Global Chart (same as history, reuse or show prediction)
const globalCtx = document.getElementById("globalChart").getContext("2d");
new Chart(globalCtx, {
  type: "line",
  data: {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [{
      label: "Projected Population (Billion)",
      data: [8.2, 8.3, 8.4, 8.5, 8.6, 8.7],
      borderColor: "#00ff99",
      backgroundColor: "rgba(0, 255, 153, 0.15)",
      fill: true,
      tension: 0.3,
      pointBackgroundColor: "#00ff99"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#00ff99"
        }
      },
      x: {
        ticks: {
          color: "#00ff99"
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "#00ff99"
        }
      }
    }
  }
});
