
function getResult(){
                //To get the number in the input
                let grade = parseFloat(document.getElementById("fgrade").value);
                
                    if (grade >= 98||grade == 100){
                        document.getElementById("grade").innerHTML = " 1.00";
                    } 
                    else if(grade >= 96||grade ==97 ) {
                        document.getElementById("grade").innerHTML = " 1.25";
                    } 
                    else if(grade >= 93||grade == 95){
                        document.getElementById("grade").innerHTML = " 1.5";
                    } 
                    else if(grade >= 90||grade ==92){
                        document.getElementById("grade").innerHTML = " 1.75";
                    } 
                    else if (grade >= 86||grade == 89){
                        document.getElementById("grade").innerHTML = " 2.00";
                    } 
                    else if (grade >= 83||grade == 85){
                        document.getElementById("grade").innerHTML = " 2.25";
                    } 
                    else if (grade >= 80||grade == 82){
                        document.getElementById("grade").innerHTML = " 2.5";
                    }  
                    else if (grade >= 76||grade == 79){
                        document.getElementById("grade").innerHTML = " 2.75";
                    }  
                    else if (grade >=74 ||grade == 75){
                        document.getElementById("grade").innerHTML = " 3.00";
                    }  
                    else if (grade >= 50||grade == 73){
                        document.getElementById("grade").innerHTML = " 5.00";
                    } 
                    else{
                        document.getElementById("grade").innerHTML = "You Failed";
                    }
                }