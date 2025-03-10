stop:

	sudo docker rm -f portfolio || true

build:

	sudo docker build -t portfolio:latest .

run: 

	sudo docker run -d -p 3000:3000 --name portfolio portfolio	

.PHONY: build run stop
