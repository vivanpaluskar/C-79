name_of_the_student_array = [];
function submit(){
    var name1 = document.getElementById("nameofthestudent1").value;
    var name2 = document.getElementById("nameofthestudent2").value;
    var name3 = document.getElementById("nameofthestudent3").value;
    var name4 = document.getElementById("nameofthestudent4").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);

    console.log(name_of_the_student_array);

    document.getElementById("displayname").innerHTML=name_of_the_student_array;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sort(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("displayname").innerHTML=name_of_the_student_array;
}