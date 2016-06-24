var xmlhttp = new XMLHttpRequest();
var url = "https://api.myjson.com/bins/2f94r";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText); //retrieve json object
    } 
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response){ //Writing json objects into corresponding divs
    var obj = JSON.parse(response);
    document.getElementById("basics").innerHTML =
    "Name : " + "<b>" +
    obj.basics.name + "</b>" + "<br>" +
    obj.basics.label + "<br>" +
    "Email : " +
    obj.basics.email + "<br>" +
    "Phone Number : " +
    obj.basics.phone + "<br>" +
    obj.basics.summary + "<br>" +
    "Address Line : " +
    obj.basics.location.address +
    obj.basics.location.postalCode + "<br>" +
    "State  : " +
    obj.basics.location.city + "<br>" +
    "Country : " +
    obj.basics.location.country + "<br>";

    document.getElementById("edu").innerHTML = 
    "2015" + "<br>" +
    "Studying in : " +
    obj.education[0].institution + "<br>" +
    "Majoring in : " +
    obj.education[0].major + "<br>" +
    "Grade : " +
    obj.education[0].grade +  "<br>" +
    "2012" + "<br>" +
    "Studying in : " +
    obj.education[1].institution + "<br>" +
    "Certification in : " +
    obj.education[1].major + "<br>" +
    "Grade : " +
    obj.education[1].grade + "<br>";

    document.getElementById("skills").innerHTML =
    "<b>" + "Programming" + "</b>" + "<br>" +
    obj.skills[0].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[0].level + "<br>" +
    obj.skills[1].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[1].level + "<br>" +
    obj.skills[2].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[2].level + "<br>" +
    obj.skills[3].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[3].level + "<br>" +
    obj.skills[4].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[4].level + "<br>" +
    "<br>" +
    "<b>" + "Design" + "</b>" + "<br>" +
    obj.skills[5].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[5].level + "<br>" +
    obj.skills[6].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[6].level + "<br>" +
    obj.skills[7].name + "&nbsp;&nbsp;" +
    "Level : " + obj.skills[7].level + "<br>";

    document.getElementById("coco").innerHTML =
    obj.cocurriculum[0].organization + "<br>" +
    "<b>" +
    obj.cocurriculum[0].position + "</b>" + "<br>" +
    obj.cocurriculum[0].duration + "<br>" +
    obj.cocurriculum[0].achievements[0] + "<br>" +
    obj.cocurriculum[0].achievements[1] + "<br>" +
    "<br>" +
    obj.cocurriculum[1].organization + "<br>" +
    "<b>" +
    obj.cocurriculum[1].position + "</b>" + "<br>" +
    obj.cocurriculum[1].duration + "<br>" +
    obj.cocurriculum[1].achievements[0] + "<br>";

    document.getElementById("awards").innerHTML =
    "<b>" + obj.awards[0].title + "</b>" + " (" +
    obj.awards[0].year + ")" + "<br>"+
    "<b>" + obj.awards[1].title + "</b>" + " (" +
    obj.awards[1].year + ")" + "<br>" +
    "<b>" + obj.awards[2].title + "</b>" + " (" +
    obj.awards[2].year + ")" + "<br>";

    document.getElementById("lang").innerHTML =
    "<b>" + obj.languages[0].name + "</b>" + " - " + 
    obj.languages[0].level + "<br>" +
    "<b>" + obj.languages[1].name + "</b>" + " - " + 
    obj.languages[1].level + "<br>" +
    "<b>" + obj.languages[2].name + "</b>" + " - " + 
    obj.languages[2].level + "<br>";

    document.getElementById("interest").innerHTML =
    obj.interests.num1 + "<br>" +
    obj.interests.num2 + "<br>" +
    obj.interests.num3 + "<br>";

    document.getElementById("ref").innerHTML =
    obj.references.name + "<br>" +
    obj.references.position + "<br>" +
    obj.references.relationship + "<br>" +
    obj.references.company + "<br>";
}