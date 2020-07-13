class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.siteHeader = document.querySelector('.site-header');
        this.events();
    }

    events() {
        // this.menuIcon.addEventListener('click', () => this.toggleMenu());
        this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        // console.log('THIS is: ', this);
        this.menuContent.classList.toggle('-open');
        this.siteHeader.classList.toggle('-open');
        this.menuIcon.classList.toggle('-open');
    }
}

export default MobileMenu;
