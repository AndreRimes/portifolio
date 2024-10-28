stop:

	sudo docker rm -f portfolio || true

build:

	sudo docker build -t portfolio .	

run: 

	sudo docker run -p 3000:3000 --name portfolio portfolio	

.PHONY: build run stop
