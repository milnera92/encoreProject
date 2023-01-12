# FinalProject
ALL API KEYS HAVE BEEN REMOVED FROM /PUBLIC/RUNTIME-ENV.JS. ALL .ENV FILES IN THIS PROJECT HAVE BEEN GIT IGNORED.
![image](https://user-images.githubusercontent.com/95140821/211231814-d5f6caff-73f1-4657-80c6-44ddd4dbf1a8.png)
-----------------------------------------------------------------------------------------------------------------
Only missing features is seeing upcoming concerts, as Songkick API was taken down for devlopment
Audio DB was a worse version of the Youtube API for finding videos of the artist performing
-----------------------------------------------------------------------------------------------------------------
### Name of Project
ENCORE
### Summary
Whenever I go see live music, I make use of a website called https://www.setlist.fm/ to see recent set lists the artist has played at live shows, to get a feeling for what to expect. This is especially useful for bands I am not familiar with, and want to get an idea for their “current sound” if they have a big library going back many years.

There is also a website called https://www.songkick.com/ I used extensively in the past to find upcoming concerts near me – with the main feature being it could link to your Spotify playlist to show you specifically concerts for artists you were following.

I see no reason why a combination of the two would not be a fantastic idea. You view a list of upcoming concerts around you, click on one, and will be able to immediately see the set list the band is expected to play.

In addition to that, I could use https://www.theaudiodb.com/ to pull YouTube videos from recent live shows the band has played, or even images, and display that alongside the set list, link to buy tickets, venue details, etc.

Finally, you could then generate a Spotify playlist based on that anticipated set list to get into the mood for the concert. This is especially great if it’s for a band you have never seen.
### Features
    - View upcoming concerts near you (NOT ABLE TO DO, SONGKICK API DOWN. TICKETMASTER API DOES NOT SUIT THIS
    - Show the set list the band is anticipated to play for that concert (NOT ADDED, BUT ITS BETTER TO JUST VIEW PAST SETLISTS TO GET THIS INFO)
    - Show YouTube videos and images from the artists recent live shows (THOUGHT AUDI DB API WOULD GIVE LIVE SHOW PHOTOS BUT IT DID NOT)
    - Generate a playlist based on the set list ( STRETCH)
    - Save a list of upcoming shows you are interested in
    - Save a list of set lists from shows you have seen / want to see
    - User login (auth0)
    - Page to see saved sets / playlists
### APIs & Packages Used
### Packages:
    - See package.json files ;)
### APIs: 
    - https://www.songkick.com/developer/ ( THIS IS DOWN AND NOT CURRENTLY USEABLE)
    - https://api.setlist.fm/docs/1.0/index.html
    - (ADDED) Ticket Master API
    - (ADDED) Google Maps API
    - (ADDED) Youtube API
    - (ADDED) Auth0
    - (Stretch) https://developer.spotify.com/documentation/web-api/
    - (Stretch) https://www.theaudiodb.com/api_guide.php
        - ** this last one I am just listing because I find interesting, and could be useful for a stretch goal, or to continue building this project down the road. It appears to mostly be a paid API.
    - TheAudioDB through RapidAPI ( WAS NOT NECESSARY)
   
  
### Stretch Goals
Generating a Spotify playlist based on the most recent set list seems like it would be most complicated, and will be a stretch goal. I would have to implant connecting a Spotify account, so for the scope of the project I will just use test data. Also using the AudioDB API to show detailed information about the artist/tracks, etc that is not provided by the other APIs. Can show past concert images, youtube videos of live shows too. That last bit might not be a stretch

Copyright Andrew Milner 2022 All rights reserved

