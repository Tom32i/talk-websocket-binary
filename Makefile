.SILENT:
.PHONY: build

default: install build start

## Install dependencies
install:
	npm install

## Build
build: install
	npm run build

## Start watcher and server
start: install
	npm run start
