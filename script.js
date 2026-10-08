// -----------------------------
// Pollution Dashboard Data
// -----------------------------

const cityData = {
  Mumbai: {
    aqi: 78,
    temperature: "29°C",
    humidity: "68%",
    wind: "14 km/h"
  },

  Delhi: {
    aqi: 156,
    temperature: "31°C",
    humidity: "54%",
    wind: "9 km/h"
  },

  Pune: {
    aqi: 62,
    temperature: "27°C",
    humidity: "60%",
    wind: "12 km/h"
  },

  Bengaluru: {
    aqi: 48,
    temperature: "25°C",
    humidity: "64%",
    wind: "16 km/h"
  }
};


// -----------------------------
// Update Dashboard
// -----------------------------

const citySelect = document.getElementById("citySelect");

citySelect.addEventListener("change", function () {

  const city = this.value;
  const data = cityData[city];

  document.getElementById("aqiValue").textContent = data.aqi;
  document.getElementById("temperature").textContent = data.temperature;
  document.getElementById("humidity").textContent = data.humidity;
  document.getElementById("wind").textContent = data.wind;

  updateAQI(data.aqi);
});


// -----------------------------
// AQI Status
// -----------------------------

function updateAQI(aqi) {

  const status = document.getElementById("aqiStatus");
  const progress = document.getElementById("aqiProgress");

  let text;
  let color;

  if (aqi <= 50) {
    text = "Good";
    color = "#16a34a";
  } 
  else if (aqi <= 100) {
    text = "Moderate";
    color = "#f59e0b";
  } 
  else if (aqi <= 150) {
    text = "Unhealthy for Sensitive Groups";
    color = "#f97316";
  } 
  else if (aqi <= 200) {
    text = "Unhealthy";
    color = "#ef4444";
  } 
  else {
    text = "Very Unhealthy";
    color = "#7c3aed";
  }

  status.textContent = text;
  status.style.color = color;

  progress.style.width = Math.min(aqi / 2, 100) + "%";
  progress.style.background = color;
}


// -----------------------------
// Dark Mode
// -----------------------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


// -----------------------------
// Scroll to Dashboard
// -----------------------------

function scrollToDashboard() {

  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });

}


// -----------------------------
// Join Movement Button
// -----------------------------

function showMessage() {

  alert(
    "🌱 Thank you for caring about our planet!\n\n" +
    "Together, we can reduce pollution and build a cleaner future."
  );

}


// -----------------------------
// Pollution Chart
// -----------------------------

const ctx = document
  .getElementById("pollutionChart")
  .getContext("2d");

const pollutionChart = new Chart(ctx, {

  type: "line",

  data: {

    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets: [{
      label: "AQI",
      data: [
        82,
        91,
        74,
        105,
        88,
        72,
        78
      ],

      borderColor: "#16a34a",

      backgroundColor: "rgba(22, 163, 74, 0.12)",

      borderWidth: 3,

      fill: true,

      tension: 0.4,

      pointBackgroundColor: "#16a34a",

      pointRadius: 5

    }]
  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        display: true
      }

    },

    scales: {

      y: {
        beginAtZero: true,
        grid: {
          color: "#e5ebe6"
        }
      },

      x: {
        grid: {
          display: false
        }
      }

    }
  }

});
