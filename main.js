const searchBtn = document.querySelector("#search-button");
const ipGrid = document.querySelector(".ip-grid");
const ip = document.querySelector("#ip");
const country = document.querySelector("#country");
const flag = document.querySelector("#flag");
const city = document.querySelector("#city");
const org = document.querySelector("#org");
const isp = document.querySelector("#isp");
const callingCode = document.querySelector("#calling-code");
const zipcode = document.querySelector("#zipcode");
const currency = document.querySelector("#currency");
const symbol = document.querySelector("#symbol");
const time = document.querySelector("#time");
const offset = document.querySelector("#offset");

searchBtn.addEventListener("click", getIpData);

function getIpData() {
  const searchInput = document.querySelector("#searchbar").value;
  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=b023e6d115294256a31b469bec5011d3&ip=${searchInput}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      ipGrid.style.display = "grid";

      // Initialize the map and set its view to a default location and zoom level
      let map = L.map("map").setView([data.latitude, data.longtitude], 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Add a marker to the map
      let marker = L.marker([data.latitude, data.longtitude]).addTo(map);

      ip.innerHTML = searchInput;
      country.innerHTML = data.country_name;
      flag.src = data.country_flag;
      city.innerHTML = data.city;
      org.innerHTML = data.organization;
      isp.innerHTML = data.isp;
      callingCode.innerHTML = data.calling_code;
      zipcode.innerHTML = data.zipcode;
      currency.innerHTML = data.currency.code;
      symbol.innerHTML = data.currency.symbol;
      time.innerHTML = data.time_zone.current_time;
      offset.innerHTML = data.time_zone.offset;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
