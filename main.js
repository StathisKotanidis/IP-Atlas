const searchBtn = document.querySelector("#search-button");

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
      const ipGrid = document.querySelector(".ip-grid");
      //   ipGrid.innerHTML = "";
      ipGrid.style.display = "grid";
      const ip = document.querySelector("#ip");
      ip.innerHTML = searchInput;
      const country = document.querySelector("#country");
      country.innerHTML = data.country_name;
      const flag = document.querySelector("#flag");
      flag.src = data.country_flag;
      const city = document.querySelector("#city");
      city.innerHTML = data.city;
      const org = document.querySelector("#org");
      org.innerHTML = data.organization;
      const isp = document.querySelector("#isp");
      isp.innerHTML = data.isp;
      const callingCode = document.querySelector("#calling-code");
      callingCode.innerHTML = data.calling_code;
      const zipcode = document.querySelector("#zipcode");
      zipcode.innerHTML = data.zipcode;
      const currency = document.querySelector("#currency");
      currency.innerHTML = data.currency.code;
      const symbol = document.querySelector("#symbol");
      symbol.innerHTML = data.currency.symbol;
      const time = document.querySelector("#time");
      time.innerHTML = data.time_zone.current_time;
      const offset = document.querySelector("#offset");
      offset.innerHTML = data.time_zone.offset;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
