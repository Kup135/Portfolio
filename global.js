console.log("IT'S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// const navLinks = $$("nav a")

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// if(currentLink){
//     currentLink.classList.add("current");
//     }

//reading localStorage for preferred colorScheme
//////TODO///////////


if (localStorage.colorScheme){
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
}

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "CV/", title: "CV"},
    {url: "contact/", title: "Contact"},
    {url: "https://github.com/Kup135", title: "My GitHub"},
];

let nav = document.createElement("nav");


const ARE_WE_HOME = document.documentElement.classList.contains("home");
console.log(ARE_WE_HOME);


for  (let p of pages) {
    let url = p.url;
    let title = p.title;
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    console.log(a.pathname, location.pathname);
    if (a.host === location.host && a.pathname === location.pathname){
        a.classList.add("current");
    } 
    else {
        a.target = url.startsWith("http") ? "_blank" : "";
    }
    nav.append(a);
}

const options = [
    { value: "light dark", text: "Automatic" },
    { value: "light", text: "Light" },
    { value: "dark", text: "Dark" }
]

let label = document.createElement("label");
label.textContent = "Theme:"; 
label.classList.add("color-scheme");

let select = document.createElement("select");
select.setAttribute("aria-label", "Theme:");
select.classList.add("color-scheme");


for  (let p of options) {
    let option = document.createElement("option");
    option.value = p.value;
    option.textContent = p.text;
    select.append(option);
}

//adding the navigation and the select to the body
document.body.prepend(label, select, nav);

//making the select bar work
select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
    document.documentElement.style.setProperty("color-scheme", event.target.value);
    localStorage.colorScheme = event.target.value
});


//form

const form = document.querySelector("form");

form?.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = new FormData(form);

    for (let [id, value] of data) {
            data[id] = value;
        }
        console.log(data);
    }
)
