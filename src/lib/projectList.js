let italianOnPhone = require("../../public/assets/italianOnPhone.png");
let moodScreenshot = require("../../public/assets/moodRating.webp");
// let placeholder = require("../../assets/placeholder.png");
let pawsipad = require("../../public/assets/pawsiPad.webp");
let simplyScholars = require("../../public/assets/roughSimplyScholars.webp");
let gtaSmall = require("../../public/assets/gtaBEST.webp");

const projectsList =

[
    {
        "id": 1,
        "title": "PawsOn.Life",
        "slug": "pawsonlife",
        "description": "Developed in an Agile team environment, PawsOn.Life is a full-stack web application that allows users to search for hiking trails in their area via Google Maps API. Users can review trails as being pet-friendly. Users can also create an account and save trails to their favorites list.",
        "tags": ["MERN", "React", "MongoDB", "Google Maps API", "Express", "Node", "Agile development", "RESTful API", "MVC", "Material UI", "Heroku", "Netlify", "Git"],
        "github": "https://github.com/ianpmaher/pawsOnLifeFrontEnd",
        "github2": "https://github.com/ianpmaher/pawsOnLifeBackEnd",
        "live": "https://pawson.life/",
        "image": pawsipad,
        // "screenshot": pawsScreenshot, // Discott, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons
        // "screenshot": "https://user-images.githubusercontent.com/120536234/282807646-28fd01fc-7a91-420c-8b23-1c3466654ecd.png"
    },
    {
        "id": 2,
        "title": "Mood Ring",
        "slug": "moodring",
        "description": "A self-help app for healthier habits and safer schools. Full Stack CRUD application utilizing the 7 RESTful routes, Express.js, MongoDB, Mongoose, Embedded JavaScript, and node.js.",
        "tags": ["MVC", "MongoDB", "Express", "Node", "EJS", "CSS", "JavaScript", "Heroku", "Netlify", "Git"],
        "github": "https://github.com/ianpmaher/moodring",
        "live": "https://still-sierra-16854-4298cf6fca1b.herokuapp.com/logs/",
        "image": moodScreenshot,
        // "image": "https://user-images.githubusercontent.com/120536234/270083620-4e5ba78d-720d-4852-9ce4-ee688015c14d.png",
        "screenshot": "https://user-images.githubusercontent.com/120536234/270083592-2c66d8d6-2e0a-4e70-bd8e-1ddcaa97a358.png"
    },
    {
        "id": 3,
        "title": "Simply Scholars",
        "slug": "simplyscholars",
        "description": "A full-stack web application utilizing the Next.js & Strapi.js stack. This is a platform for the non-tech-savvy to build and maintain their own scholarship websites and databases. Providing customizability and ease of use, Simply Scholars is a tool for scholarship organizations to reach more students.",
        "tags": ["Next.js", "Strapi", "Tailwind", "Postgres", "Authorization", "Dynamic Routing"],
        "github": "https://github.com/ianpmaher/simply-scholars",
        "github2": "https://github.com/ianpmaher/simply-scholars-backend",
        "live": "https://simply-scholars.vercel.app/",
        "image": simplyScholars,
    },
    {
        "id": 5,
        "title": "Grand Theft Autocorrect",
        "slug": "gta",
        "description": "A typing test game utilizing JavaScript, Fetch API, and dynamic DOM manipulation.",
        "tags": ["JavaScript", "Fetch API", "HTML", "CSS", "Netlify", "Git"],
        "github": "https://github.com/ianpmaher/gta",
        "live": "https://grand-theft-autocorrect.netlify.app/",
        "image": gtaSmall,
        // "image": "https://user-images.githubusercontent.com/120536234/260235684-673eb284-84fd-416d-96b5-d84da3da786d.png"
    },
    {
        "id": 4,
        "title": "Study Italian",
        "slug": "studyitalian",
        "description": "A full-stack web application to help language lovers learn Italian! Users can translate to and from Italian, quiz themselves on words, with more features to come.",
        "tags": ["React", "API", "Express", "MongoDB", "Netlify", "Heroku"],
        "github": "https://github.com/ianpmaher/italian",
        "live": "https://main--darling-rabanadas-f9d73b.netlify.app/",
        "image": italianOnPhone,
        "screenshot": "",
    },
]

export default projectsList;