document.addEventListener( 'DOMContentLoaded', () => {

    const sr = ScrollReveal( {
        origin: 'top',
        distance: '5rem',
        duration: 2000,
        reset: false,
    } );

    new TypeIt( "#Loading", {
        speed: 200,
        waitUntilVisible: true,
        cursorChar: "|",
        loop: true
    } )
        .type( '{' )
        .type( '<span class="name">...</span>' )
        .type( '};' )
        .move( -2, { instance: true } )
        .delete( ".name" )
        .type( '<span class="text-blue-600">AM</span>' )
        .move( 2, { instance: true } )
        .pause( 1000 )
        .go();

    setTimeout( () => {
        document.getElementsByClassName( "splash" )[ 0 ].classList.add( "animate__fadeOut", "hidden" );
        document.getElementById( "app" ).style.visibility = "visible";

        sr.reveal( '#typeName', {} );

        sr.reveal( '.get-to-know', {} );
        sr.reveal( '.about__image', { delay: 200 } );
        sr.reveal( '.about__text', { delay: 400 } );

        sr.reveal( '.experience__title', {} );
        sr.reveal( '.experience__details__container', { delay: 200 } );

        sr.reveal( '.contact__text', {} );
        sr.reveal( '.contact__info__container', { delay: 200 } );

        setTimeout( () => {
            document.getElementById( "wave-hand" ).classList.add( "animate__wobble" );
            // document.getElementById( "chat-hi" ).classList.remove( "hidden" );

            /* logo */
            new TypeIt( "#main-logo", {
                speed: 200,
                waitUntilVisible: true,
                cursorChar: "|",
                loop: true
            } )
                .type( '<' )
                .type( '<span class="name">...</span>' )
                .type( '>' )
                .move( -1, { instance: true } )
                .delete( ".name" )
                .type( '<span class="">/</span><span class="text-blue-600">AM</span>' )
                .move( 1, { instance: true } )
                .pause( 1000 )
                .go();

            // about me
            new TypeIt( "#about-me", {
                speed: 25,
                waitUntilVisible: true,
                cursorChar: "|"
            } )
                .type( "Hi, I'm Abdelrahman Mahmoud, a full stack web developer from Egypt." )
                .pause( 500 )
                .type( "I have a passion for creating dynamic and responsive web applications using .Net technologies." )
                .pause( 500 )
                .type( "I enjoy learning new skills and exploring new challenges in the web development field. " )
                .pause( 500 )
                .type( " I have worked on various projects, using the latest technologies." )
                .pause( 500 )
                .type( " I value quality, efficiency, and collaboration in my work. I'm always eager to learn from others and share my knowledge and experience." )
                .go();

            // new TypeIt( "#chat-hi", {
            //     speed: 100,
            //     waitUntilVisible: true,
            //     afterComplete: function ( instance ) {
            //         instance.destroy();
            //     }
            // } )
            //     .type( "👋 Hi there" ).pause( 900 )
            //     .delete( 10 )
            //     .type( "nice to meet you 🤗" ).pause( 900 )
            //     .delete( 18 )
            //     .type( 'my name is Abdelrahman Mahmoud' ).pause( 900 )
            //     .delete( 30 )
            // .type( 'you can call me Abdo 😅' ).pause( 900 )
            // .delete( 22 )
            // .type( 'I\'m a Human 👦' ).pause( 900 )
            // .delete( 7 )
            // .type( 'night person 🌃' ).pause( 900 )
            // .delete( 14 )
            // .type( 'problem solver' ).pause( 900 )
            // .delete( 21 )
            // .type( 'and ' ).pause( 900 )
            // .delete( 4 )
            // .type( 'A Full Stack web developer  🤩' )
            // .go();

        }, 2000 )



        // const theme = localStorage.getItem( "theme" );

        // if ( theme === 'dark' || ( !( 'theme' in localStorage ) && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) ) {
        //     document.documentElement.classList.add( 'dark' )
        // } else {
        //     document.documentElement.classList.remove( 'dark' )
        // }

        // // Whenever the user explicitly chooses light mode
        // localStorage.theme = 'light'

        // // Whenever the user explicitly chooses dark mode
        // localStorage.theme = 'dark'

        // // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem( 'theme' )
    }, 0 );

    // let navElement = document.querySelectorAll( '.nav-item' );
    // navElement.addEventListener( "mouseenter", function () {
    //     navElement.classList.add( 'group-hover:visible', 'animate__slideInRight' );
    // } )


    var navElementParent = document.querySelectorAll( '.nav-item' );

    navElementParent.forEach( parent => {
        const child = parent.querySelector( 'span' );

        parent.addEventListener( 'mouseover', () => {
            child.classList.add( 'group-hover:visible', 'animate__slideInRight' );
        } );

        parent.addEventListener( 'mouseout', () => {
            child.classList.remove( 'group-hover:visible', 'animate__slideInRight' );
        } );
    } );


    let scrollToTop = document.getElementById( "up" );

    window.onscroll = function () {
        if (
            document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
        ) {
            scrollToTop.classList.remove( "hidden" );
        } else {
            scrollToTop.classList.add( "hidden" );
        }
    };

    document.addEventListener( 'mousemove', ( event ) => {
        const cursorWrapper = document.getElementsByClassName( "cursor-wrapper" )[ 0 ];
        const { clientX, clientY } = event;
        cursorWrapper.style.transform = `translate3d(${ clientX }px, ${ clientY }px, 0)`;
    } );


} );
