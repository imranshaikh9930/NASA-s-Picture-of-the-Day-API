#Deploy Link :- https://imranshaikh9930nasapictureapi.netlify.app/



NASA Image of the Day Web Application
---------------------------------------------------------
This web application leverages NASA's Picture of the Day API to create an interactive experience for users. Users can explore captivating images captured by NASA on specific dates, save their searches locally, and view a history of their past searches.

Features:

User-Friendly Interface:

The HTML file includes a form (ID: "search-form") with an input field (ID: "search-input") that allows users to select a specific date.
The page features a visually appealing layout with a designated section (ID: "current-image-container") to display the image of the day and an unordered list (ID: "search-history") for showcasing the user's search history.

Search and Display:
---------------------------------------------------------
The JavaScript file provides two essential functions:
getCurrentImageOfTheDay(): Fetches and displays the current image of the day when the page loads.
getImageOfTheDay(): Fetches and displays the image for the selected date, saving the date to local storage and adding it to the search history.
Local Storage Integration:

saveSearch():
--------------------------------------------
This function saves selected dates to local storage, maintaining a record of the user's search history.
addSearchToHistory(): Retrieves the search history from local storage and dynamically updates the unordered list in the UI. Clicking on a specific date in the list triggers a new API call to refresh and display the image for that date in the designated section.
Responsive Styling:

The application is styled using a dedicated CSS file, ensuring a visually pleasing and responsive user experience across various devices.
How to Use:

Search for Images:
-------------------------------------------------
Enter a specific date using the provided form and click the submit button to retrieve the corresponding image from NASA's API.
Save Search History:

The application automatically saves each search date to local storage, enabling users to revisit their past searches.
Explore Past Searches:

The search history is displayed in an organized list. Click on a specific date to view the corresponding image in the designated section.
Enjoy the Image of the Day:

Upon page load, the application showcases the current image of the day, providing users with a daily dose of awe-inspiring visuals from NASA.
Embark on a journey of exploration and discovery with NASA's Image of the Day Web Application!
