document.addEventListener( 'DOMContentLoaded', () => {

    const sr = ScrollReveal( {
        origin: 'top',
        distance: '5rem',
        duration: 2000,
        reset: true,
    } );

    /* Scroll Image */

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
            document.getElementById( "chat-hi" ).classList.remove( "hidden" )
            new TypeIt( "#chat-hi", {
                speed: 100,
                waitUntilVisible: true,
                afterComplete: function ( instance ) {
                    instance.destroy();
                }
            } )
                .type( "👋 Hi there" ).pause( 900 )
                .delete( 10 )
                .type( "nice to meet you 🤗" ).pause( 900 )
                .delete( 18 )
                .type( 'my name is Abdelrahman Mahmoud' ).pause( 900 )
                .delete( 30 )
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
                .type( 'A Full Stack web developer  🤩' )
                .go();
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
    }, 4000 );

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




} );