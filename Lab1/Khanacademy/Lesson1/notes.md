## Lesson 1: Intro to HTML

# Welcome to the web!
https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/v/making-webpages-intro

Web - fast network of connected computers that have websites
Server - when a computer is connected to the web and spitting out the website, we call computer as "server". "Serving"(обслуживать) website
Website is written using 3 langs:
1) HTML - marking up the website content
2) CSS - for styling HTML marks
3) JavaScript - makes "interactive"
HTML + CSS + JS = Webpage
Browsers: chrome, firefox, opera...
Clients: laptop, computer(desktop), mobile phone, tablet(planshet), gaming console

Webpage: https://www.tutorialsmate.com/2021/07/difference-between-webpage-and-website.html
Website: https://www.tutorialsmate.com/


# HTML basics
DOCTYPE - signal to browser that this webpage written in modern html, not old
Mark up language = all about tags
Tag is <>
<html> --> start html tag 
</html> --> end html tag
html tag needs to contain every other tags that makes up this webpage
<head> tag --> contains tags that helps the browser render the page(doesnt contain anything user sees) (визуализировать вебстраницу)
<title> --> browser uses to decide the title of the page
<h1> ... <h6> all about sizes of lines
<h1> greatest size, headline
<h6> least important
<p> --> paragraph
Browsers dont render the line breaks, they ignore whitespaces and break lines, even if u write like this:
<p>Nazymka
Chocolate eyes
Sweetie
Giiirrlll
</p>
So it will join all of these lines in browser representation: Nazymka Chocolate eyes Sweetie Giiirrlll
Wanna break? DO \n? :)
Use <br> --> stands for break
Updated version:
<p>Nazymka <br>
Chocolate eyes <br>
Sweetie <br>
Giiirrlll 
</p>

Example:
<p>Naza choco eyes</p>
Opening tag --> <p>
Content --> Naza choco eyes
Closing tag --> </p>
p element --> whole: <p>Naza choco eyes</p>



# Text emphasis
<em> --> stands for emphasis(акцент)
<strong> --> bold/жирный

# Lists
<ul> --> unordered list: browser will not number the list items(wont add indices like: 1, 2, 3). It will just add little bullets(пули/круглежок) 
<li> --> list item
<ol> --> ordered list: tells the browser automatically number each new item

# Images
<img> --> image
attribute - additional information:
<img src="https://......rabbit.png" alt="Rabbit with lop ears in barn> --> specify url when src typed, attribute values are always wrapped in two quotes --> ""
alt (attribute inside <img>)--> alternative text for an image another attribute when image sourced(url specified) / server hosting image was failing, browser couldnt load the image 
<img src="https://...url alt="described text about an image" width="some number" or height="some number">