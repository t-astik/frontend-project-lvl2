install:
	npm install
publish:
	npm publish --dry-run
gendiff:
	bin/gendiff.js
lint:
	npm run pretest
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch