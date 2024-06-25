# backboneApp

This project is build on top of: Backbone.js generator [https://github.com/yeoman/generator-backbone](https://github.com/yeoman/generator-backbone)

## Usage

Install: `npm install && bower install`

## Generators

Available generators:

- backbone:model
- backbone:view
- backbone:collection
- backbone:router
- backbone:all

## Typical workflow

```sh
yo backbone # generates your application base and build workflow
yo backbone:model blog
yo backbone:collection blog
yo backbone:router blog
yo backbone:view blog
grunt serve
```
