function check(){
    var count = 0;
    var question1 = document.getElementById("q1-a1");
    var question2 = document.getElementById("q1-a2");
    var question3 = document.getElementById("q1-a3");
    var question4 = document.getElementById("q1-a4");
    if(question1.checked == true){
        count++
        alert("awnser-1 RIGHT")
    }else{
        alert("awnser-1 wrong")
    }

    var a = document.getElementById("q2-a1");
    var b = document.getElementById("q2-a2");
    var c = document.getElementById("q2-a3");
    var d = document.getElementById("q2-a4");
    if(a.checked == true){
        count++
        alert("awnser-2 RIGHT");
    }else{
        alert("awnser-2 wrong");
    }

    var a1 = document.getElementById("q3-a1");
    var a2 = document.getElementById("q3-a2");
    var a3 = document.getElementById("q3-a3");
    var a4 = document.getElementById("q3-a4");
    if(a3.checked == true){
        count++
        alert("awnser-3 RIGHT");
    }else{
        alert("awnser-3 wrong");
    }
    alert("your count is" + count)
}