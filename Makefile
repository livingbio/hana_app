.PHONY: serve emulate

prepare:
	npm install -g cordova
emulate:
	cordova emulate ios
serve:
	cordova serve

watch:
	cd www; webpack --progress --colors --watch

#shortcuts
emu: emulate
s: serve
