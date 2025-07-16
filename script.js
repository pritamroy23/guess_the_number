let count =0;
let secreatnum =0;
function startgame() {
    document.getElementById('messageArea').innerHTML="Game Started! Try to guess the number between 1 and 100.";
    secreatnum = Math.floor(Math.random() * 100) + 1;
    count = 0;
    
}
function checkguess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message =""
    
        if(guess > secreatnum)
        {
            message = "Your guess is too high! Try again.";
            
            
        }
        else if (guess < secreatnum) {
            message = "Your guess is too low! Try again.";
        }
        else {
            
           message = "Congratulations! You guessed the number: " + secreatnum + ". Click 'Start Game' to play again.";           
        }
    }
    document.getElementById('messageArea').innerHTML = message;
    
    
