document.addEventListener("DOMContentLoaded", function() {
    // Function to type out an element with letters wrapped in spans and animate opacity
    function typeEffect(element, speed, callback) {
        let text = element.textContent;
        element.textContent = ""; // Clear text content

        // Wrap each letter in a span with opacity set to 0%
        let htmlWithSpans = "";
        for (let char of text) {
            htmlWithSpans += `<span style="opacity: 0;">${char}</span>`;
        }
        element.innerHTML = htmlWithSpans; // Set the element's HTML with spans

        // Make the element visible
        element.style.visibility = "visible";
        element.classList.add('cursor'); // Add cursor class at the start
        element.classList.add('type-animation-started'); // Add type-animation-started class

        let i = 0;
        const spans = element.querySelectorAll('span'); // Select all the span-wrapped characters

        // Typing effect by changing opacity from 0 to 1
        function typing() {
            if (i < spans.length) {
                spans[i].style.transition = `opacity ${speed / 1000}s`; // Set opacity transition
                spans[i].style.opacity = 1; // Make the letter visible
                
                i++;
                setTimeout(typing, speed); // Continue typing with faster speed
            } else {
                // Remove cursor class when typing is complete
                element.classList.remove('cursor');
                if (callback) {
                    callback(); // Move to the next element immediately
                }
            }
        }
        typing();
    }

    // Function to handle typing each element from a list of elements
    function typeListItems(items, index, speed, callback) {
        if (index < items.length) {
            // Typing each item individually
            typeEffect(items[index], speed, function() {
                // Immediately call the next element when typing completes
                typeListItems(items, index + 1, speed, callback);
            });
        } else if (callback) {
            callback(); // Callback when all elements are finished
        }
    }

    // Function to handle multiple selectors in sequence
    function typeElementsInSequence(selectors, speed) {
        function processNextSelector(index) {
            if (index < selectors.length) {
                const elements = document.querySelectorAll(selectors[index]);
                typeListItems(elements, 0, speed, function() {
                    processNextSelector(index + 1);
                });
            }
        }

        processNextSelector(0); // Start with the first selector
    }

    // List of selectors to be animated in order
    const selectorsToAnimateA = ["nav a"];  // You can add more selectors as needed
    const selectorsToAnimateB = ["h1, h2"];  // You can add more selectors as needed

    // Immediately hide all elements on load
    [selectorsToAnimateA, selectorsToAnimateB].forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(item => {
            item.style.visibility = "hidden"; // Hide all elements immediately
        });
    });

    // Start typing animations for the given selectors in sequence
    setTimeout(() => {
        typeElementsInSequence(selectorsToAnimateA, 40);
        typeElementsInSequence(selectorsToAnimateB, 40); // Faster typing speed: 20ms per character
    });
});
