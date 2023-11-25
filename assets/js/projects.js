const Projects = [
    {
        name: "Cinema Plus (Movie App)",
        github: "https://github.com/abdelrahmman97/Movie-App",
        live: "https://cinemaplus-movieapp.netlify.app/",
        images: [
            "./assets/images/movie app/ma 4.jpeg",
        ]
    },
    {
        name: "Lookscout Landing Page",
        github: "https://thriving-dragon-a3fcd9.netlify.app/",
        live: "./data/Landing Page/index.html",
        images: [
            "./assets/images/Lookscout/Lookscout.jpeg",
        ]
    },
    {
        name: "Landing Page",
        github: "",
        live: "./data/Landing Page/index.html",
        images: [
            "https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png",
        ]
    },
    {
        name: "Landing Page",
        github: "",
        live: "./data/Landing Page/index.html",
        images: [
            "https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png",
        ]
    },
    {
        name: "Landing Page",
        github: "",
        live: "./data/Landing Page/index.html",
        images: [
            "https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png",
        ]
    },
];

document.addEventListener( 'alpine:init', () => {

    Alpine.store( 'user', {
        fullName: "Abdelrahman Mahmoud",
        shortName: "Abdelrahman M.",
        title: "Full Stack web developer",
        gmail: "abdelrahman.m1097@gmail.com",
        phone: "+20 0101 7343 667",
        linkedin: "",
        upwork: ""

    } );

    Alpine.store( 'projects', {
        list: Projects
    } );


} )



function carousel ( data ) {
    return {
        currentIndex: 0,
        items: data.items,

        prevSlide () {
            this.currentIndex = ( this.currentIndex - 1 + this.items.length ) % this.items.length;
        },

        nextSlide () {
            this.currentIndex = ( this.currentIndex + 1 ) % this.items.length;
        }

    };
}

