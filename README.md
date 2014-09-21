# Bunkai: Cross-Module Communication

## Transfer Information from One View to Another

In this challenge, we start out with two discrete Views. When a particular thing happens in one View, we need to communicate that to the other View and have it respond accordingly.

### Spec

#### The Mike Sorrentino

We've been tasked to build a bare-bones email reader. It will consist of two panels: the left panel will display a list of all emails (each just with a bit of "teaser" text), and on the right, the entire contents of the email selected on the left panel.


#### The Task

The HTML and CSS is already written as is most of the JavaScript. The code lives in [this git repo](TODO). The left panel is an instance of `EmailListView`, and the right panel is an instance of `EmailDetailView`. When you checkout the repo, you'll notice that you can already select different emails from the left-hand panel. What's not happening (what you'll need to do) is having the `EmailDetailView` (right panel) display the full email of whatever's selected in the `EmailListView` (left panel).

You may use whatever tools you feel would best solve the problem, but keep things loosely coupled. An optimal solution would keep the two Views from knowing about (read: referencing) each other. The solution should also be unobtrusive. That is to say, stay out of the global (window) scope.


#### The Answers

Here be spoilers. I'd encourage you to only look at these if you're hopelessly stuck or are already finished. As you know, there's more than one way to skin a cat, but if you need a hint:

>! Use custom events

* [A quick and dirty solution](TODO)
* [A satisfactory solution](TODO)


### Metadata

#### Challenge Time

0.5 - 4 hours


#### Requirements

* Familiarity with RequireJS and jQuery
* Functional knowledge of Object-Oriented JavaScript


#### Repository

TODO
