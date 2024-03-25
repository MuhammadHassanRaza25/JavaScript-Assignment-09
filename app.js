//Q1 empty arry
// var arr = []

// Q3 string arry
//var arr_string = ["hassan", "daniyal","raza","afaq"]

// Q4 number arry
//var arr_num = [12,11,25,26]

// Q5 boolean arry 
//var arr_boolean = [true,false]

// Q6 mixed arry
//var arr_mixed = ["hassan",55,false]


// Q7 education qualifications in Pakistan

  document.write(`<h2>*Education qualifications in Pakistan</h2>`)
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil","PhD"]
for(var i =0; i<edu.length; i++){
    document.write(i+1+") ",edu[i] , "<br>")
}


// Q8
document.write(`<br>`)
document.write(`<h2>*Students Score</h2>`)
var student_arr = ["asheel","ali","hassan"]
var student_score = [320,230,480]
document.write('Score of' + ' ' +student_arr[0] + ' ' +"is" + ' ' +student_score[0] + ' ' + "Percentage: 64%","<br>")
document.write('Score of' + ' ' +student_arr[1] + ' ' +"is" + ' ' +student_score[1] + ' ' + "Percentage: 46%","<br>")
document.write('Score of' + ' ' +student_arr[2] + ' ' +"is" + ' ' +student_score[2] + ' ' + "Percentage: 96%","<br>")

//Q9 
document.write(`<br>`)
document.write(`<h1>*Color Assignment</h1>`)
var arr_color = ["red" ,"blue" ,"green" ,"grey" ,"white" ,"black"]
document.write(arr_color)

document.write(`<h2>Colors add to Start : unshift</h2>`)
arr_color.unshift("yellow")
document.write(arr_color)

document.write(`<h2>Colors add to end : push</h2>`)
arr_color.push("purple")
document.write(arr_color)

document.write(`<h2>Colors remove from start : shift</h2>`)
arr_color.shift()
document.write(arr_color)

document.write(`<h2>Colors remove from end : pop</h2>`)
arr_color.pop()
document.write(arr_color)

document.write(`<h2>Delete & add new color : splice</h2>`)
arr_color.splice(2,1,"orange")
document.write(arr_color)

// Q10 
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h1>*Score of Students</h1>`)
document.write('320,510,230,480,120')
var studentScore = [320,510,230,480,120,]
document.write(`<h1>Ordered Score of Students</h1>`)
studentScore.sort()
document.write(studentScore)

// Q11
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h1>*Initialize city names</h1>`)
var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write(cityNames)
document.write(`<h2>Selected cities list</h2>`)
var copy = cityNames.slice(2,4)
document.write(copy)

// Q12
document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h1>*Array in single string</h1>`)
var arr_cat = ["This","is","my","cat"]
document.write(arr_cat)
document.write(`<h2>after join method</h2>`)
var join = arr_cat.join(' ');
document.write(join)

// Q15
document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h1>*Phone Manufacturers</h1>`)

var phone = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
document.write(`<select>
<option>${phone[0]}</option>
<option>${phone[1]}</option>
<option>${phone[2]}</option>
<option>${phone[3]}</option>
<option>${phone[4]}</option>
<option>${phone[5]}</option>
</select>`)

document.write(`<h3>Assignment End</h3>`)
