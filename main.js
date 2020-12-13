var Names_array=[]

function submit(){
  var Display_student_array= [] 

  for(var j=1; j<=4; j++){
  var Names_of_student = document.getElementById("name_of_the_student_"+j).value;
console.log(Names_of_student)
Names_array.push(Names_of_student)
}
var length_of_Name_array = Names_array.length;
console.log(length_of_Name_array);

for(var k=0; k <length_of_Name_array;k++){
    Display_student_array.push("<h4>NAME - "+ Names_array[k] +"</h4>")
    console.log(Display_student_array)
}
document.getElementById("display_name_with_commas").innerHTML=Display_student_array;
console.log(Display_student_array)

var remove_commas = Display_student_array.join(" ")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}

function sorting(){
Names_array.sort()
var Display_sorted_array=[]
var length_of_Name_array = Names_array.length;
console.log(length_of_Name_array);

for(var k=0; k <length_of_Name_array;k++){
    Display_sorted_array.push("<h4>NAME - "+ Names_array[k] +"</h4>")
    console.log(Display_sorted_array)
}
document.getElementById("display_name_with_commas").innerHTML=Display_sorted_array;
console.log(Display_sorted_array)

var remove_commas = Display_sorted_array.join(" ")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}
 

