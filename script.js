
const NASA_API_KEY ="B1BYuBxdl1GfAimjA2o9Qh0WZeM0GrLBhQFkaWdj";

document.addEventListener('DOMContentLoaded', getCurrentImageOfTheDay);

function getCurrentImageOfTheDay() {
    const today = new Date().toISOString().split('T')[0];
    getImageOfTheDay(today);
}

function getImageOfTheDay(date) {
    const searchInput = document.getElementById('search-input');
    let  selectedDate = searchInput.value;

    // Save the date to local storage
    saveSearch(selectedDate);

    if(selectedDate === ""){
        selectedDate  = date;
    }
    // Fetch data from NASA API
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display data in the UI
            displayImageData(data);
        })
        .catch(error => console.error('Error fetching data:', error));

        searchInput.value = "";
}

function saveSearch(date) {
    // Get existing searches from local storage
    const searches = JSON.parse(localStorage.getItem('searches')) || [];

    // Save the new date to the array
    searches.push(date);

    // Save the updated array back to local storage
    localStorage.setItem('searches', JSON.stringify(searches));

    // Update the search history UI
    addSearchToHistory();
}

function addSearchToHistory() {
    // Get searches from local storage
    const searches = JSON.parse(localStorage.getItem('searches')) || [];

    // Display searches in the search history UI
    const searchHistoryList = document.getElementById('search-history');
    searchHistoryList.innerHTML = '';

    searches.forEach(date => {
        const listItem = document.createElement('li');
        listItem.textContent = date;
        listItem.addEventListener('click', () => getImageOfTheDay(date));
        searchHistoryList.appendChild(listItem);
    });
}

function displayImageData(data) {
    const currentImageContainer = document.getElementById('current-image-container');

    // Clear previous content
    currentImageContainer.innerHTML = '';

    const h1 = document.createElement("h1");


    // For compairing current date with different dates
    const today = new Date().toISOString().split('T')[0]

    
    if(today  === data.date){
        h1.innerHTML = `NASA Picture of the Day`
    }
    else{
        h1.innerHTML = `Picture On ${data.date}`
    }


    // Create image element
    const image = document.createElement('img');
    image.src = data.url;
    image.alt = data.explanation;

    // Create title element
    const title = document.createElement('h2');
    title.textContent = data.title;

    // Create explanation element
    const explanation = document.createElement('p');
    explanation.textContent = data.explanation;

    // Append elements to the container
    currentImageContainer.append(h1,image,title,explanation)
  
}
