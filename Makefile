.PHONY: serve emulate

prepare:
	npm install -g cordova
emulate:
	cordova emulate ios
serve:
	cordova serve

#shortcuts
emu: emulate
s: serve
