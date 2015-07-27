# grunt-knexseed

> Grunt task for knex seed

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-knexseed --save-dev
```
#### Note:
You should install appropriate driver for your DB.
If you are using postgres:
```shell
npm install pg
```
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-knexseed');
```

## The "knexseed" task

### Overview
In your project's Gruntfile, add a section named `knexseed` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  knexseed: {
            config: {
                directory: './config/db/seed',
                database: {
                    client: 'pg',
                    connection: {
                        host: '127.0.0.1',
                        user: 'postgres',
                        password: 'test',
                        database: 'test'
                    }
                }
            }
        }
});
```

### Options

#### make:name

Creates new seed file

#### run

Runs all seed files for the current environment.
