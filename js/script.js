let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

gender = document.getElementById("gender").value
birthDate = document.getElementById("date").value

birthDate = new Date(birthDate);

let birthYear = birthDate.getFullYear();
let birthMonth = birthDate.getMonth() + 1;
let birthDay = birthDate.getDate();

CC = birthYear.toString().substr(0, 2);
YY = birthYear.toString().substr(2, 2);
MM = birthMonth
DD = birthDay

dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
dayOfWeek = parseInt(dayOfWeek);

let akanNmame;
maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let birthDay;

if (dayOfWeek == 0 && gender == "male"){
    birthDay = "Sunday";
    akanName = maleAkanNames[0];
} else if (dayOfWeek == 0 && gender == "female"){
    birthDay = "Sunday";
    akanName = femaleAkanNames[0];
}else if (dayOfWeek == 1 && gender == "male"){
    birthDay = "Monday";
    akanName = maleAkanNames[1];
}else if (dayOfWeek == 1 && gender == "female"){
    birthDay = "Monday";
    akanName = femaleAkanNames[1];
}else if (dayOfWeek == 2 && gender == "male"){
    birthDay = "Tuesday";
    akanName = maleAkanNames[2];
}else if (dayOfWeek == 2 && gender == "female"){
    birthDay = "Tuesday";
    akanName = femaleAkanNames[2];
}else if (dayOfWeek == 3 && gender == "male"){
    birthDay = "Wednesday";
    akanName = maleAkanNames[3];
}else if (dayOfWeek == 3 && gender == "female"){
    birthDay = "Wednesday";
    akanName = femaleAkanNames[3];
}else if (dayOfWeek == 4 && gender == "male"){
    birthDay = "Thursday";
    akanName = maleAkanNames[4];
}else if (dayOfWeek == 4 && gender == "female"){
    birthDay = "Thursday";
    akanName = femaleAkanNames[4];
}else if (dayOfWeek == 5 && gender == "male"){
    birthDay = "Friday";
    akanName = maleAkanNames[5];
}else if (dayOfWeek == 5 && gender == "female"){
    birthDay = "Friday";
    akanName = femaleAkanNames[5];
}else if (dayOfWeek == 6 && gender == "male"){
    birthDay = "Saturday";
    akanName = maleAkanNames[6];
}else if (dayOfWeek == 6 && gender == "female"){
    birthDay = "Saturday";
    akanName = femaleAkanNames[6];
}

let result = document.getElementById("result").innerHTML = "Your Akan Name is" + " " + akanName + document.getElementById("akanForm").reset();
});