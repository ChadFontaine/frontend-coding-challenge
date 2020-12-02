# Notes

Please leave anything you like in here


## Thanks
First of all I'd like to say I really enjoyed doing the assignment. This was my first proper spin with Vue and was a nice learning experience and a cool insight into some of how the code works at Thriva!

## Small Notes of Interest
- I changed the element type of the CheckButton component to use a checkbox as I figured that was maybe more semantically accurate and nice for accessibility. However this meant I had to make some minor styling changes to ensure focus worked on the label. It also made testing a bit trickier in the end.
- For formatting the DOB in the success page I used the native Intl.DateTimeFormat with it's default locale
the design called for the British standard, but I figured it'd be nicer if it reflected the users locale.
- I opted to use Vuex for state management as it seemed the project was leaning towards this and I found the dev tools browser extension to be excellent. I'm not sure of the best practices, but I felt a single parent component could also have been used to pass state and data down to the components.

## Things I'd like to Improve (if I had more time)
 - I came across the handy map getters vuex functionality quite late and unfortunately didn't have time to refactor to add it, I'd probably use that going forward to cut down on some boilerplate.
 - I'd like to add constants for all of the action, getter and mutation names, to reduce the likehood of me breaking something with a silly typo and changing something in one place instead of 12,000.
 - Currently I call an action to set the current step in each of the survey stage components. It would be nice to abstract this somehow so that it's in one place - perhaps by watching the route but maybe there's another way?
 - A better home for some of the constants I've used in the assignment ()
 - Don't use magic numbers for the goals and diet limits (these should also be in a constant file somewhere ideally)
 - Protected routes - for example if a user lands on the success page without having completed the survey they should automatically be redirected to the initial name page.
 - I wasn't sure of the best practices so I may have messed up with how I initialize the component data or use Vuex.