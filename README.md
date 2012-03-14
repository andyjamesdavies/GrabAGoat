#Grab a Goat

This is an experiment with phonegap that randomly grabs a goat from the google image api.

#Phonegap installation notes:

- Firstly look at this: http://phonegap.com/start
- The projects are Cordova projects not phonegap
- You have to create the www directory yourself
- Doesn't use ARC out the box so you have to go to 'Edit' -> 'Refactor' -> 'Convert to Objective-C ARC...'

That should do it, other considerations are if you're using an external api you need to add it to the Cordova.plist file under 'ExternalHosts'

