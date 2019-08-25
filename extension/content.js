let running, tokens, username, password;
running = false;
tokens = 0;
username = null;
password = null;
let activityCheck = null;

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    if (running === false) {
        running = true;
        init();
    }
}

function init() {
    username = prompt('Enter Username');
    password = prompt('Enter Password');
    var working = window.open("", "Working", "width=275,height=275");
    working.document.write('<img src=" https://pa1.narvii.com/6244/0e858cab5abd38d2b00618c6b9b88efa76812440_hq.gif">');
    working.document.write("<body>Begin working!</body>");

    if (running === true) {
        console.log('Extension working');
        let keyPressed, mouseMoved, timer, totalTime;
        keyPressed = false;
        mouseMoved = false;
        timer = 0;
        totalTime = 0;
        tokens = 0;
        // Add key event listener to broswer (document object)
        document.addEventListener('keypress', function() {
            keyPressed = true;
            console.log('key was pressed');
        });
        document.addEventListener('mousemove', function() {
            mouseMoved = true;
            console.log('mouse was moved');
        });
        
        // Add timer
        activityCheck = setInterval(myTimer, 1000); // executes every 1 second
        function myTimer() {
            // Check if key is pressed
            if (keyPressed) {
                timer = 0;
                keyPressed = false;
            }
            if (mouseMoved) {
                timer = 0;
                mouseMoved = false;
            }
            timer ++
            totalTime ++
            // Set timer to break where you will get coins if no key is pressed for 10 minute straight
            if ((totalTime - (24*60)) % (24*60) === 0) { // set to -24 minutes % 30 minutes
                tokens += 2;
                var successful = window.open("", "Successful", "width=440,height=460");
                successful.document.write('<img src="https://pa1.narvii.com/6244/b8be9631741090d8bc090904b73614fdac58ca99_hq.gif">');
                successful.document.write("<body>Nice work! You gained 2 tokens, go take a break and go stretch</body>");
            }
            if ((totalTime - (25*60)) % (30*60) === 0) { /// change to 25 minutes
                window.clearInterval(activityCheck)
                const restCheck = setTimeout(checkActivity, 5000); // Change to 10 minutes
                function checkActivity() {
                    if (!keyPressed && !mouseMoved) {
                        tokens += 2;
                    }
                    timer = 0;
                    activityCheck = setInterval(myTimer, 1000);
                }
                // set new interval to check for 10 minutes to not allow any movement
            } 
            // If gone through 5 minutes, 1 token
            if (timer === (2*60)) { // change to 2 minutes
                // add pop up of hammi
                var warning1 = window.open("", "Warning1", "width=400,height=320");
                warning1.document.write('<img src="https://media0.giphy.com/media/7oUdj7cAkXVfi/source.gif">');
                warning1.document.write("<body>Stay Focused!</body>");           
            } else if (timer === (3*60)) { // change to 3 minutes
                // add pop up of hammi
                var warning2 = window.open("", "Warning2", "width=220,height=240");
                warning2.document.write('<img src="https://media.tenor.com/images/5146396979b84b2cb67fb637d5bf9639/tenor.gif">');
                warning2.document.write("<body>Warning! Get back to work!</body>");            
            } else if (timer === (4*60)) { // change to 4 minutes
                console.log('Time over');
                window.clearInterval(activityCheck);
                running = false;
                // add pop up of hammi
                var unsuccessful = window.open("", "Unsuccessful", "width=320,height=310");
                unsuccessful.document.write('<img src="https://media1.tenor.com/images/8496c2b571542ba4a32794a63d840530/tenor.gif?itemid=12456782">');
                unsuccessful.document.write("<body>You have been unproductive for too long</body>");  
            }
            //console.log(timer);
            //console.log(getTokens());
        }
    }
}

function getUsername() {
    return username;
}

function getPassword() {
    return password;
}

function getTokens() {
    return tokens;
}