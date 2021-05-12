# Script to install prod
install:
	npm install

# Start the prod server
start:
	firebase emulators:start

# from develop to master
release:
	./scripts/release.sh
	firebase deploy

release-minor:
	./scripts/release-minor.sh
	firebase deploy

release-major:
	./scripts/release-major.sh
	firebase deploy
