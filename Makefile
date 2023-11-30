css_location := ~/web/css
js_location := ~/web/js
icons_location := ~/web/icons

server := 8008

setup: 
	cp -r $(css_location) ./css
	cp -r $(js_location) ./js
	cp -r $(icons_location) ./icons

start:
	@echo "Starting server..."
	@python -m http.server -c-1 8008
	@firefox http://localhost:$(server)/index.html
