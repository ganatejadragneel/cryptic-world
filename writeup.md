# Writeup for Web/Cryptic World

Authors: [Gana Teja](https://github.com/ganatejadragneel)

## Description

There are 3 levels to this challenge where the user is directed to the subsequent challenge from the clues in the current challenge.
THe user will be able to find the flag at the end of the challenge.

## Challenge

## Level 1:
Playing with HTML:
In this level, we have a button given which is unclickable and certain hints given openly for the next 2 challenges from this challenge. 

As the button is not clickable, the user needs to figure out a way to enable the button by removing the css portion of the element which would remove the "disabled" option after which it becomes clickable. 

## Level 2:

Morse Code and Image name:
Here, there are two images, one on the left and right. Intuition is to understand that it is morse code and solve it.
Now, from the morse code, we get a url which is a url shortener. 
As there is an image beside it, we understand that we need to add a parameter in the path which is the image file name.
This gives the new link.

## Level 3:

Crypto Hashing:
In this, we get a zip file to download. 
After we extract, we get a dll file. 
When we try to open it in notepad, we notice that it is a python code, and so we run it as a python file.
In the python file, there's a key field which needs to be changed which says, "Who am I?", we know from part 1 that we are Mario.
After we change it to mario, we get a final random word which needs to be put as a pastebin url(gave this hint in part 1), after which a pastebin link will open and we get our flag.

