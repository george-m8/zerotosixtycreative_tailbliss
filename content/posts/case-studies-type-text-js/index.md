---
title: "Make Text Type Like a Typewriter on Your Website"
date: 2024-09-18T10:10:59+01:00
draft: false
language: en
featured_image: featured-image.jpg
summary: On a number of occassions, I've found myself searching for a good way to make text type across my website like a typewriter punching letters in one at a time.
description: On a number of occassions, I've found myself searching for a good way to make text type across my website like a typewriter punching letters in one at a time. typeTextJS is my solution to this problem.
author: Zero To Sixty Creative
authorimage: ../assets/images/global/logoSquare.png
categories: "Case Studies"
tags: 
- "JavaScript"
- "Animation"
- "Web Design"
---

On a number of occassions, I've found myself searching for a good way to make text type across my website like a typewriter punching letters in one at a time. ChatGPT and other AI language models do a great job of this. I love watching my crafty little AI guy thinking about what it's writing and type as it does.

Still, none of the solutions I've found have quite hit the mark...

## Pure CSS Solutions
It's amazing what can be done with CSS, particularly CSS solutions. Javascript can almost be forgotten in favour of easy to set up CSS transitions and animations. Great for buttons, good for emphasis, but finnicky when trying to handle more advanced animations. Still, no JavaScript is required and we can all agree that that's generally a good thing. 

When it comes to typewriter effects, CSS leaves a little to desire. Typical implementations force the text not to wrap and reveal text by increasing its container's width and revealling the content. And ::after selector can also be used with animation to add a blinking cursor to the end of the text, but this will not be removed once the line finishes typing.

The pure CSS solution is not very responsive and not easy to apply across different content or dynamic content.

## Really basic JS implementation
It's simple, just define your text containers, define your text in JavaScript, and have JavaScript enter one character at a time into the container at some speed. 

Issue is that users without JavaScript enabled will just see a blank page and there's a some chance that's all search engines will see too. You might also have trouble adding links, spans, styles, etc.

## Issues with above solutions
- CSS doesn't look that good
- CSS solutions become unweildly when animating lots of elements or complicated pages
- CSS solutions aren't typically mobile responsive
- CSS solutions do not handle multiline text well or at all.
- JavaScript solutions fail if JavaScript is not available
- Simple JavaScript solutions can cause issues for search engines and indexing
- JavaScript soltions can make websites hard to edit
- Typed text effects don't work well with multiline text/line breaks.

## My solution - typeTextJS
I'd like to say typeTextJS was created out of neccessity. But in reality it was created out of procrastination... and the desire to make my website look cool.

You should see it on use on this website. It types out the navigation and headings. Some sequentially, some simultaneously. Since this site is built using Hugo there's a degree of dynamicly populated text. typeTextJS works great with this, causing no problems (that I'm aware of).

The scripts work for text and non-text based elements like images or icons, making all appear as if being typed out in front of you. For images and the like, they are faded in one by one.

When implementing the scripts, you just need to define your element selectors within an appropriate function and they'll be typed out from left to right in the order that they appear within the DOM.

```
animatePage.typeInSequence("h1, h2, h3, a", 60, false)
```

The above function will find all of the H1, H2, H3 and A elements and type them out at a speed of `{60 / 1000}s`. Whatever appears first on the page will be typed first and so on.

I've also prepared some example scripts to type text or elements simultaneously. These can be found on <a href="https://github.com/george-m8/typeTextJS" target="_blank">my Github</a>.

What's more, typeTextJS can preserve the space of the original element to prevent layout issues. This is used on this site so that the navigation doesn't 'grow' from the right hand side, just being typed in the place they will stay. This is handled by making the elements transparent, instead of using `display:none;` or `visibility:hidden;`. 

**Important Note:** Preserving space comes at the cost of the cursor. Since the space is preserved the cursor would just hang around at the end of the sentence until the text meets it. The cursor class is not added if space is preserved. More on this later.

**No JavaScript?** No problem! Without JavaScript the text will never be hidden in the first place. Read away just without cool animations.

**No JavaScript but still want animations?** Fine. Just use a `<noscript>` tag to add CSS animation fallback. Since the typed text animations are so bad, I've opted to have elements fade in instead using a simple animation and staggered delays. As of writing I have not implemented that on this site, and may opt for a simpler fallback animation due to dynamic content. Still, how much of the internet is actually not using JavaScript?

## Use of CSS within typeTextJS
I love CSS, it's relatively simple and very effective. For simple things like a blinking cursor or styling text it's great. So, this script just adds and removes classes that can easily be customised.

**Want a blinking cursor?** That's already in the repo, just add cursor.css to your project. 

**Want to customise it?** Go ahead. I'd recommend using CSS animation or just the `::after` selector. You can use JavaScript too.

**Text needs a background after typing but not before?** Cool, the `.type-animation-started` is added to the element when the type animation starts and is not removed. Style away.

**There's one line of text that looks weird with a cursor?** Just style that with overruling CSS so that it has no cursor when applied.

## Collaboration
I've built this tool for me and it works well. I'd be flattered if others used it too. It serves my purposes but could certainly improved. If anyone has any improvements then I'd love to collaborate via GitHub. My focus is on ensuring this is easy to set up and use to make simple but interesting animation.

## Find out more
**Take a deeper look, clone, and collaborate via <a href="https://github.com/george-m8/typeTextJS" target="_blank">my Github</a>.**