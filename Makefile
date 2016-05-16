.PHONY: www

prepare:
	npm install -g cordova
sim:
	cordova emulate ios
www:
	cordova serve
