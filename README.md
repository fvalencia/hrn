# HRN - Front End Test

I decided to set up the project using Angular, why? just as a test case to show you my development skills, gulp, bower and npm, didn't wanted to complicated too much things using webpack, but it's certainly a good option too, basically what gulp our task manager and allow us to generate a final minify build of the project.

###Folder Structure

* gulp: this folder contains all the gulp tasks for the project, I want to said here that I didn't write those lines and they are from a public [YeoMan Generator][1], I do know how to modify it but I didn't wanted to reinvent the wheel.

* src:  this is the source folder and contains the project base code, this one written by me.
  * app: This contains the main applications files
    * common: Contains the components that live across the app such us layouts, navbar, sidenav, etc.
    * states: States of the application, home, detail, etc.
    * app.config: Configuration of libraries and Angular related plugins.
    * app.constants: Constants of the application.
    * app.module: Module dependencies configuration.
    * app.run: Run function, useful to intercept states changes and Auth services.
    * app.scss: Main Stylesheet of the application, used by gulp to compile the scss.
  * assets: Public assets folder, images, fonts, icons, etc.
  * index.html: app html markup, this file shouldn't be edited and it is used by gulp to inject the javascript and scss compiled files


[1]: https://github.com/Swiip/generator-gulp-angular
