console.log("Hello from Js file");
let students = [

    {
        name: "jamyang",
        age: 22,
        address: "Jakar Lhakhang",
        bio: "she is from Bumthang and she likes to eat and sleep",
        hobbies: ["sleeping ", "cooking", "hiking", "eating", "coding"]
    },
    {
        name: "Tashi",
        age: 24,
        address: "Jakar Lhakhang",
        bio: "she is from Bumthang and she likes to sleep and eat",
        hobbies: ["coding", "hiking", "cooking", "sleeping"]

    },
    {
        name: "Norbu",
        age: 20,
        address: "Jakar Lhakhang",
        bio: "she is from Lhuentse and she likes to play football",
        hobbies: ["sleeping", "eating", "hiking"]

    },
    {
        name: "susma",
        age: 22,
        address: "Jakar Lhakhang",
        bio: "she is from tsirang and she likes to dance",
        hobbies: ["hiking", "eating", "coding",]

    },

];


function submit() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    const mySelect = document.getElementById("option");
    const selectValue = mySelect.value;

    if (!name) {
        alert("please enter name");
        return;
    }
    if (selectValue === "Select One") {
        alert("please select either Age or Address");
        return;
    }

    const student = students.find(function (item) {
        if (name === item.name) {
            return true;
        } else {
            return false;
        }
    });

    if (!student) {
        alert(`No student found with the name ${name}`);
        return;
    }
    switch (selectValue) {
        case "Age":
            alert(`${name} is ${student.age} years old`);
            break;
        case "Address":
            alert(`${name} is from ${student.address}`);
            break;
        case "Bio":
            alert(`${name} and ${student.bio}`);
            break;
        case "Hobbies":
            alert(`${name} and ${student.hobbies}`);
            break;
        default:
            alert(
            `${name} is ${student.age} years old and ${name} is from ${student.address}. her bio is ${student.bio} ${student.hobbies}`
            )
    };
}
  
        