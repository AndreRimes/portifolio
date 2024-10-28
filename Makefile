stop:

	docker rm -f portfolio || true

build:

	docker build -t portfolio .	

run: 

	docker run -p 3000:3000 --name portfolio portfolio	

.PHONY: build run stop
