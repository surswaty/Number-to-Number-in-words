// Number to Number in word, Upto 9999
var once = ["" ,"One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", 
            "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
            "Sixteen", "Seventeen", "Eighteen", "Nneteen"];

var tenth = ["" ,"", "Twenty", "Thirty", "Fourty", "Fifty",
             "Sixty", "Seventy", "Eighty", "Ninty"];
 var hundred = ["", "One Hundred", "Two Hundred", "Three Hundred", "Four Hundred",
                 "Five Hundred", "Six Hundred", "Seven Hundred", "Eight Hundred",
                 "Nine Hundred"];
var thousand = ["", "One Thousand", "Two Thousand", "Three Thousand", "Four Thousand",
                 "Five Thousand", "Six Thousand", "Seven Thousand", "Eight Thousand", "Nine Thousand",];

var input = prompt("Enter a Number: ");

if(input <20){
    alert(once[input]);
}else if(input >= 20 && input< 100){
    alert(tenth[input.toString()[0]] + " " + once[input.toString()[1]]);
}else if(input >= 100 && input < 1000){
    if(input.toString()[1] == 0  && input.toString()[2] == 0){
        alert(hundred[input.toString()[0]]);
    }else if(parseInt(input.toString().slice(1,3)) < 20){    
        alert(hundred[input.toString()[0]] + " and " + once[parseInt(input.toString().slice(1,3))]);
    }else{
    alert(hundred[input.toString()[0]] + " and " + tenth[input.toString()[1]] + " " + once[input.toString()[2]]);
}
}else if(input >= 1000 && input <10000){
    if(input.toString()[1] == 0  && input.toString()[2] == 0 && input.toString()[3] == 0){
        alert(thousand[input.toString()[0]]);
    }else if(input.toString()[input.length -1] == 0  && input.toString()[input.length-2] == 0){
        alert(thousand[input.toString()[0]] + " and " + hundred[input.toString()[1]]);
    }else if(parseInt(input.toString().slice(2,input.length+1)) < 20){    
        alert(thousand[input.toString()[0]] + " and " + once[parseInt(input.toString().slice(2,input.length+1))]);
    }else{
        alert(thousand[input.toString()[0]] + " " + hundred[input.toString()[1]] + " and " + tenth[input.toString()[2]] + " " + once[input.toString()[3]]);
    }
}