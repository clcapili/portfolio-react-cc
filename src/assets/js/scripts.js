// mobile nav position on scroll
export function headerScript() {
    let headerMobile = document.querySelector('.header-mobile');
    let headerMobileLinks = headerMobile.querySelectorAll('.mobile-menu a');
    let mobileMenuIcon = document.querySelector('.hamburger-menu');
    let isMenuOpen = false;

    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop && st > 100) {
        headerMobile.classList.remove('show');
        } else {
        headerMobile.classList.add('show');
        }
        
        lastScrollTop = st;
    });
    
    mobileMenuIcon.addEventListener('click', () => {
        headerMobileTrigger();
    });

    for (let i = 0; i < headerMobileLinks.length; i++) {
        headerMobileLinks[i].addEventListener('click', () => {
            headerMobileTrigger();
        })
    }

    function headerMobileTrigger() {
        document.body.classList.add('mobile-menu-open');
        headerMobile.classList.add('open');
        isMenuOpen = !isMenuOpen;

        if (!isMenuOpen) {
            document.body.classList.remove('mobile-menu-open');
            headerMobile.classList.remove('open');
        }
    }
}