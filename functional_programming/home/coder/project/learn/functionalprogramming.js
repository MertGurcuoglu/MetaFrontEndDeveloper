// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Step 1: Create the message variable
    var message = "%c" + txt;

    // Step 2: Create the style variable
    var style = `color: ${color};`;

    // Step 3: Update the style variable
    style += `background: ${background};`;

    // Step 4: Update the style variable again
    style += `font-size: ${fontSize};`;

    // Step 5: Console log the message and style
    console.log(message, style);
}


// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Step 1: Create the fontStyle variable
    var fontStyle = "color: tomato; font-size: 50px";

    // Step 2: Create the if statement
    if (reason == "birthday") {
        // Step 3: Console log for birthday
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        // Step 5: Console log for champions
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        // Step 6: Console log for other reasons
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Step 1: Invoke the consoleStyler() function
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

// Step 2: Invoke the celebrateStyler() function
celebrateStyler('birthday');


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Invoke the consoleStyler function
    consoleStyler(color, background, fontSize, txt);

    // Invoke the celebrateStyler function
    celebrateStyler(reason);
}

// Invoke the styleAndCelebrate function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// Call styleAndCelebrate