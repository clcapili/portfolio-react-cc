// mobile nav position on scroll
export function headerScript() {
    var headerMobile = document.querySelector('.header-mobile');
    let mobileMenuIcon = document.querySelector('.hamburger-menu');
    let isMenuOpen = false;

    var lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop && st > 100) {
        headerMobile.classList.remove('show');
        } else {
        headerMobile.classList.add('show');
        }
        
        lastScrollTop = st;
    });
    
    mobileMenuIcon.addEventListener('click', function(){
        document.body.classList.add('mobile-menu-open');
        headerMobile.classList.add('open');
        isMenuOpen = !isMenuOpen;

        if (!isMenuOpen) {
            document.body.classList.remove('mobile-menu-open');
            headerMobile.classList.remove('open');
        }
    });
}