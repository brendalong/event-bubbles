# Event bubbling directs an event to its intended target, it works like this:

* A button is clicked and the event is directed to the button
* If an event handler is set for that object, the event is triggered
* If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent
* The event bubbles up from parent to parent until it is handled, or until it reaches the document object.

*-W3 Schools*

Demonstration files included.