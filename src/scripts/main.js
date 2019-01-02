const students = [
    {
        name: "Chris Miller",
        clasS: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        clasS: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        clasS: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        clasS: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        clasS: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        clasS: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        clasS: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        clasS: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        clasS: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        clasS: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        clasS: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        clasS: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`;
};

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`;
};

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`;
};
const pass = (style) => {
    return `<p class ="${style}"> PASS </p> `
};
const fail = (style) => {
    return `<p class ="${style}"> FAIL </p> `
};




const studentCreatorPassing = (name, clasS, info) => {
   return `<div id="student">
        ${h1(name, "xx-large")}
        ${section(clasS, "section--padded")}
        ${aside(info, "pushRight")}
        ${pass ("passing")}
        </div> `
    };
    
    const studentCreatorFailing = (name, clasS, info) => {
        return `<div id="student">
        ${h1(name, "xx-large")}
        ${section(clasS, "section--padded")}
        ${aside(info, "pushRight")}
        ${fail ("failing")}
    </div> `
};

// const container = document.querySelector("#container");
// container.innerHTML = studentCreator("Marcus Fulbright", "Algebra", "Not a bright student");

let container = document.querySelector("#container");

const getLooped = () => {
for (student of students) {

    if (student.score >= 60) {
        container.innerHTML += studentCreatorPassing(student.name, student.clasS, student.info);
      
       
    } else {
        container.innerHTML += studentCreatorFailing(student.name, student.clasS, student.info);
    }
    
}
    return container;
};  

console.log(getLooped());