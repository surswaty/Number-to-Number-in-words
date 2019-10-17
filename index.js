// to write a program to change numbers into words upto 100,
var ZeroTwelve = ["Zero" ,"One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"];
var TeenToNinty = ["Zero" ,"Teen", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"];
var userInput = prompt("Enter a One or Two digit Number: ");

        if(userInput <= 12){
            alert(ZeroTwelve[userInput]);
        }else if(userInput <= 19 && userInput > 12){
            userInput.toString();
            ZeroTwelve[3] = "Thir";
            alert(ZeroTwelve[userInput[1]] + TeenToNinty[userInput[0]]);
        }else{
            if(userInput[1] == 0){
                TeenToNinty[1] = "Ten";
                alert(TeenToNinty[userInput[0]]);
            }else{
                userInput.toString();
            alert(TeenToNinty[userInput[0]] + ZeroTwelve[userInput[1]]);
            }
            
        }