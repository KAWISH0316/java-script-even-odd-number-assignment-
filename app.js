


// ---------1 Even number------

for(var i = 2; i <= 50; i+=2){
    console.log(i);
}



// -------2 Odd number-----

for(var i = 1; i <= 50; i+=2) {
    console.log(i);
}      



// --------3 Generate Even 0r Odd------

for( var i = 1; i <= 50; i++){
   console.log(i, i % 2 === 0 ? " (Even) " : " (Odd) ");
   console.log("\n")
}



// -------4 Pattern of Number--------

var line = 10


for (var i = 1; i <= line; i++) {
    var num = " ";
    for (var j = 1; j <= i; j++) {
      num += j;
    }
    document.write(num)
    document.write("<br>")
  }


// -------5 Object of Arreys------

document.write("<h1>Objects in Arrays</h1>");

var students = [
    {
    FirstName : "Kawish",
    secondName : "Sheikh",
    Age : 22,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Zuair",
    secondName : "Sheikh",
    Age : 24,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Ameer",
    secondName : "Hamza",
    Age : 22,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Yousuf",
    secondName : "Ansari",
    Age : 22,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Sharyar",
    secondName : "Sheikh",
    Age : 18,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Ahmad",
    secondName : "Shah",
    Age : 19,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Aftab",
    secondName : "Sheikh",
    Age : 25,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Abdul",
    secondName : "Rehman",
    Age : 23,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Rohan",
    secondName : "Jabbar",
    Age : 23,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
    {
    FirstName : "Muhammad",
    secondName : "Huzaifa",
    Age : 25,
    Class : "Batch4",
    Teacher : "Saqib Raheem & Ahsan Mushtaq",
    InstName :  "Sk Digi Tech"
    },
]

for(var i = 0; i <=students.length; i++){
    document.write("<br>","FirstName :",students[i].FirstName);
    document.write("<br>","SecondName :",students[i].secondName);
    document.write("<br>","Age :",students[i].Age);
    document.write("<br>","Teacher :",students[i].Teacher);
    document.write("<br>","InstuteName :",students[i].InstName);
    document.write("<br>");
}




