## Intro to CSS

# CSS basics
CSS - Cascading Style Sheets
We embed(встроить) css inside of html. But, css isnt actually html
<style> inside <head>(as we know that in <head> tag there are contents that clients dont see, such as <title>, <meta>...., clients dont care about it, so style is too one of <head> content, as clients care about what is inside / written in webpage) 
Browser sees <style>, after everything inside <style>, </style> is CSS! "i'll see my css parser to understand it instead of my html parser"
<style>
 /*Let's add css style rule
            Style rule has selector which tells a browser what part of page
            to style and declarations, which tell the browser how to style their part*/
</style>
Style all h2's on page: 
<style>
    h2 {
        /*declarations will be written here. Declarations have properties and values*/
        color: rgb(0, 232, 15);
    }
    body 
    {
        background-color: rgb(97, 250, 255)
    }
    </style>
Color background? Everything that is visible, inside the <body> tag
selectors in css: tags without <>, css will take all values associated. Fe: <body> is tag, selector is body, write it inside <style>

Quick tip: Selecting by tag name:
we use CSS rules to select elements on a web page so that we can then style those elements.
The way we tell our CSS rule which HTML elements to style is by using selectors. There are many types of selectors that we'll cover later, but here we just want to review the one we showed in the talk-through: the element selector.
The element selector selects HTML elements based on their tag names. Each HTML element—<h1>, <p>, <li>, <body>—and any other HTML element can be selected with CSS by using the tag name without the angle brackets (< and >). For example, you can select all of the <p> tags in your webpage by using the element selector p. Here's a CSS rule that changes the color of each paragraph on a web page:
p {
    color: rgb(255, 0, 0);
}
Let's check if that made sense. Which of these rules would select all of the <h2> elements on a page?
Choose 1 answer:
(Choice A)  
h2 {
   color: rgb(255, 0, 0);
   /*RIGHT ANS*/
}

<h2> {
   color: rgb(255, 0, 0);
   /*wrong*/
}
(Choice B)  
#h2 {
   color: rgb(255, 0, 0);
   /*wrong*/
}


# Selecting by ID
assign id to tag within angle brackets(<>)
for instance, <p id="swnazzy-song"> Swnazzy magic....
<br> ... <br>...</p>
apply styling inside <style> tag with hash(#) , write hash first, and after write id name:
<style>
    #swnazzy-song {
        background-color: yellow;
    }
</style>
Id's case sensitive: if after # in <style> id is not correct written , even by letter: #id-rabbits and actual: <p id=id-Rabbits>, changes wont be applied

If id's same, browser applies styling for both of them, or for one of them

# Selecting by class
