# SVG-class
Workaround the issue of jquery not being able to correctly handle SVG classes.

# The need for these functions
The [jQuery 2.2 and 1.12 Released post][1] includes the following quote:

> While jQuery is a HTML library, we agreed that class support for SVG elements could be useful. Users will now be able to call the .addClass(), .removeClass(), .toggleClass(), and .hasClass() methods on SVG. jQuery now changes the class attribute rather than the className property. This also makes the class methods usable in general XML documents. Keep in mind that many other things will not work with SVG, and we still recommend using a library dedicated to SVG if you need anything beyond class manipulation.


If you don't want or can upgrade to those jquery versions then you might want to use the functions of this repository.

# Usage Example

    <!DOCTYPE html>
    <html>
      <body>
        <svg width="100" height="100">
          <circle id="my_circle" cx="50" cy="50" r="40" fill="yellow" />
        </svg>
      </body>
    </html>

`$('#my_circle').addClassSVG('new_class')`

# Why `SVG` suffix in function names
1. (At least for my application cases so far) I know that I am applying the function to an SVG element and not to a general jquery object.
2. Improve readability and maintainability: In the coding, the function calls clearly state that a workaround is used.
3. I can search and replace the calls after an upgrade to a jquery version that supports SVG class operations correctly (see above).

[1]: http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
