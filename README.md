# IP-Atlas

IP Atlas is a web application that allows users to input an IP address and retrieve various information about it, such as the country it belongs to, the currency of that country, country's flag, current time, ISP, offset, a map and more. 

![ipatlas](https://github.com/user-attachments/assets/64a9b6c6-e33b-4484-8513-4028f5a577af)

Link to Project: https://stathiskotanidis.github.io/IP-Atlas/

## How It's Made:
Tech Used: HTML, CSS, JavaScript, Leaflet.js,Fetch API, IP Geolocation API

This application was built using HTML and CSS to create a clean, user-friendly, and fully responsive interface that works seamlessly across all devices. JavaScript powers the core functionality, leveraging the Fetch API to retrieve data from an IP Geolocation API. This data is then dynamically rendered to the DOM, providing users with detailed information about the IP address they input. The app also utilizes Leaflet.js, a powerful JavaScript library for interactive maps, to visualize the exact geographic location of the IP address on a map. By utilizing the latitude and longitude coordinates returned by the Geolocation API, the app accurately displays the corresponding location with a marker on the map, enhancing the user experience by visually representing the IP's origin.

## Optimizations
Looking ahead, there are a few  optimizations planned to improve the performance and user experience of the application. Firstly a  potential enhancement is to introduce sophisticated error handling and user feedback to ensure graceful recovery from network issues or invalid inputs. Additionally, optimizing the loading of map assets by using techniques like lazy loading and reducing the initial payload size can further enhance the app's responsiveness. These improvements will help make the application faster, more efficient, and even more user-friendly.

## Lessons Learned:
Building this project made me realize how powerful APIs are in programming, allowing me to retrieve so many different data and be able to make an application from scratch using them alongside other powerful libraries as Leaflet.
