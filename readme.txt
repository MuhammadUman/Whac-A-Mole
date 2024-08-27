The issue is that squareId is a HTMLCollection (not an array), and HTMLCollection does not have a forEach method. To use forEach, you need to convert squareId to an array first.

You can convert the HTMLCollection to an array using Array.from or by using the spread operator ([...]).

const squareId = [...document.getElementsByClassName("square")];
or
just use querySelectorAll

hitPosition=null
so that if user clicks twice it doesnt count as 2
