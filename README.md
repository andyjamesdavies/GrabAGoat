#Grab a Goat

This is an experiment with phonegap that randomly grabs a goat from the google image api.

#Phonegap installation notes:

I was having too much trouble with phonegap 1.5 so I downloaded phonegap 1.4.1 from https://github.com/phonegap/phonegap which seems to be coming close to working.

Still todo:

- Work out connecting to external TV using the ExternalScreen plugin. 

OLD Notes (for phonegap 1.5):
- Firstly look at this: http://phonegap.com/start
- The projects are Cordova projects not phonegap
- You have to create the www directory yourself
- Doesn't use ARC out the box so you have to go to 'Edit' -> 'Refactor' -> 'Convert to Objective-C ARC...'

That should do it, other considerations are if you're using an external api you need to add it to the Cordova.plist file under 'ExternalHosts'

