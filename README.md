# Elimity Frontend Internship Exercise

## Welcome

Hi, and thanks for applying for the **Elimity Frontend Developer Intern** position at the Elimity Engineering team.

This exercise is designed to give you an opportunity to show off programming skills that would be relevant to work at
[Elimity](https://www.elimity.com/) and to give you an idea what type of work you would be doing during your internship.

## Installation

The only prerequisite for installing this application is [Docker Compose](https://docs.docker.com/compose/). You can
run the development container and open a shell in it by running the following commands:

```console
$ docker compose up -d
$ docker compose exec node bash
```

To start the application itself, run the following commands in the newly opened shell:

```console
$ npm i
$ npx ng s
```

You can now use the application by visiting http://localhost:4200 on your machine.

## Exercise instructions

This repository implements a simple todo application with Angular 17. However, it currently uses a somewhat outdated
version of the Angular Material library, which provides some good-looking components out of the box. Your task is to
update this dependency from version 16 to 17. More specifically, your solution should fulfill these requirements:

1. The application should depend on `@angular/material@^17.2.2` instead of `@angular/material@^16.2.14`.
2. There shouldn't be any big changes to application's UI or functionality.
3. The resulting code should pass the linter and formatting checks defined in
   [.github/workflows/pull-request.yml](.github/workflows/pull-request.yml).

## Practicalities

You can hand in your solution via one of these channels:

1. Create a public fork of this repository, make a PR in that repository with your changes and send us a link to the PR
   at dev@elimity.com.
2. Clone this repository, apply your changes locally and send us a ZIP file at dev@elimity.com.
