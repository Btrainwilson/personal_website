css_location := ~/web/css
js_location := ~/web/js
icons_location := ~/web/icons

server := 8008

setup: 
	ln -f -s $(css_location) ./css
	ln -f -s $(js_location) ./js
	ln -f -s $(icons_location) ./icons

start:
	@echo "Starting server..."
	@python -m http.server -c-1 8008
	@firefox http://localhost:$(server)/index.html
