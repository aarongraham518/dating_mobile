# Date Mobile

If running locally, install node_modules: npm install
To run applications: npm run start

There is an redundant api call to json.placeholder.typicode.com/users in the Map and Users Component.  I would place one api call in a store with (redux or context api). In addition, there's no error handling. I usually add a try/catch block on api calls with an error component message in the catch block.

As far as a plone feature, I'm accessing the map feature. Coordinates are listed within the array of objects (response from api). Zoom out on your phone in order to view user Pin/locations. One in Libya, 2 east of africa, 1 in antarctica.  I think these users 
are on boats...lol Pin/Markers are dynamic and display the name and website of the user.

Filtering logic works within web, but is needs debugging as there is an issue with the first character (of the name string). Feel free to search/filter using anything but the first letter, lol <--

TabBarOptions are deprecated.  Using screenOptions, but did make adjustments.  

