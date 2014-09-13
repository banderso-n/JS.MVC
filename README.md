# But Why E-Mail Models?
## Building a Simple Email Web Interface to Illustrate the Concepts of MVC and Cross-Module Communication in JavaScript: A Rope of Sand


The purpose of this tutorial is to provide one example of an MVC setup for a web app that allows for cross-module communication. I don't want to put forward that it's THE way to setup MVC, but it's an approach that has worked well for me. The reason I'm writing this is mainly to cover concepts that I get asked a lot about by less experienced developers. So because I'm getting tired of repeating myself and I haven't found any good tutorials that cover this stuff, I'm writing my own.


### What we'll be building

Image of finished app with link to live demo.

* The left panel will display all emails with some teaser text
* The right panel will display the detail view (the email in its entirety)
* Clicking an email teaser in the left panel will activate it and cause it to display in the detail view
* We'll also have a search bar to filter emails


### Prerequisite knowledge

* Basic JavaScript foundation
* jQuery
* RequireJS


### Topics we'll cover

* Binding function scope
* MVC architecture
* Templating
* Using base classes in JS (natively!)
* Cross-module communication using custom events
* How to use Collection objects


### Tools we'll use

* EventEmitter.js
* Handlebars


### Steps

0. MVC in General
    0. http://www.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/
    0. Give tldr on what methodology we'll be using
        * Show a typical MVC diagram and explain why it's not helpful
            * Apps rarely ever just have one model, one view, and one controller. How does it work when I have multiple models, maybe even multiple views for a given model, and multiple controllers?
        * Show a revised diagram illustrating how we'll setup this app
            * A Brain (representing App) pointing to two Views and a Collection. The Collection has Models floating in it. One View points to the Collection and the other View points to a Model floating inside the Collection.
0. Setting up our MVC architecture
    0. Go over file structure and explain roughly what each file will do
    0. Modules at this point will basically just be constructors (we'll gradually flesh them out)
0. The collection object
    0. Link to JS Nerdery Collections article
    0. Give tldr on collection object
    0. Add `EmailCollection.prototype.fetch`, `EmailModel.prototype.fromJSON`
0. Data to display: Rendering data to our views
    0. Add Handlebars
    0. Turn our static html into a handlebars template
    0. Add a `render` method to each view
0. Making it interactive
    0. We add click event handlers
    0. Talk about scope (find link)
0. Bridging the gap: Getting the two sides talking
    0. Add EventEmitter
    0. Make views extend EventEmitter base class
    0. Trigger and listen for custom events
0. Making it searchable
    0. We add submit event handler
    0. We add `EmailCollection.prototype.search`
