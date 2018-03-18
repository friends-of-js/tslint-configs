.PHONY: build build.module build.module.commonjs lint fix test test.module test.with.coverage coverage coverage.generate coverage.show coverage.codecov coverage.codacy coverage.codeclimate release.major release.minor release.patch release.pre commit clean

all: build

build:
	yarn run build

build.module:
	yarn run build.module

build.module.commonjs:
	yarn run build.module.commonjs

lint:
	yarn run lint

fix:
	yarn run fix

test:
	yarn run test

test.module:
	yarn run test.module

test.with.coverage:
	yarn run test.with.coverage

coverage:
	yarn run coverage

coverage.show:
	yarn run coverage.show

coverage.generate:
	yarn run coverage.generate

coverage.codecov:
	yarn run coverage.codecov

coverage.codacy:
	yarn run coverage.codacy

coverage.codeclimate:
	yarn run coverage.codeclimate

release.major:
	yarn run release.major

release.minor:
	yarn run release.minor

release.patch:
	yarn run release.patch

release.pre:
	yarn run release.pre

commit:
	yarn run commit

clean:
	yarn run clean
