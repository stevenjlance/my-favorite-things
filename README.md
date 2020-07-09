# MY FAVORITE THINGS
People love to tell each other what their favorite things are. 

![gif](https://media.giphy.com/media/vPOG1bt3Du1cQ/giphy.gif)

Whether it is sleeping, dancing, or watching re-runs of our favorite show, we all have lots of things that we like to do. Today, we are going to build an app that stores all of our favorite things!

## GOAL
Today we are going to build an application that stores our favorite things and allows us to iterate through the list so we can view all the things that we have stored to the app.

![Working App](https://media.giphy.com/media/hXOTUcFYslqq3hiADq/giphy.gif)


## TASK
To complete this task today, you'll need to utlize `addEventLister()`, `querySelector()`, and lists (along with other programming structures that we have learned!). 
1. **`querySelector()`**: Declare a variable and select for using `querySelector()` for *all* items on the page that you wish to select for. Do this near the top of the file.
2. **`favoriteThings`**: Initialize an empty list (e.g. `var NAME = []`) called favoriteThings.
3. **`addEventListener()`**: Everytime you click the submit button, the `favoriteThings` list should update with the value that is contained within the the text field (see gif above).
4. **`addEventListener` AND BUTTONS**: Attach event listeners to the left and right buttons. When the button is clicked, (1) the next value in the list should appear and (2) the screen should update with the new position.
5. **CHALLENGE**: If you click beyond the number of values in the list or below the index of 0, undefined is returned because the index doesn not exist on the list. Use a conditional that loop the favorite things list. If the new index position is out of bounds and returns undefined, then it should loop to the other end of the list. E.g. if you keep clicking the right button you should be able to continuously cycle through the list.
6. **DOUBLE TRIPLE BONUS CHALLENGE**: Refactor your code so this app becomes something that stores your favorite images. To get the URL for any image, you can (1) right click on the image in Google images and (2) selet "Copy Image Source". This gives you the URL that can then be used with an `img` tag.
