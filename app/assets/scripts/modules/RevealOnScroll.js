import _throttle from 'lodash/throttle';
import _debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(elements, revealThresholdPercent) {
        this.elementsToReveal = elements;
        this.revealThresholdPercent = revealThresholdPercent;
        this.windowHeight = window.innerHeight;
        this.scrollThrottle = _throttle(this.calculateScrollRunner, 300).bind(this);
        // console.log(this.elementsToReveal);
        this.hideInitially();
        this.events();
    }

    events() {
        // attach throttle function on scroll
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', _debounce(() => {
            // console.log('Resize just run');
            this.windowHeight = window.innerHeight;
        }, 300));
    }

    calculateScrollRunner() {
        // run calculate method on reveal items
        // console.log('scroll runs');
        this.elementsToReveal.forEach(el => {
            if (!el.isRevealed) {
                this.calculateScroll(el);
            }
        });
    }

    calculateScroll(el) {
        // scroll caculations
        if (this.windowHeight + window.scrollY > el.offsetTop) {
            // console.log('Element was calculated');
            let scrollPercent = (el.getBoundingClientRect().top / this.windowHeight) * 100;
            if (scrollPercent < this.revealThresholdPercent) {
                el.classList.add('-visible');
                el.isRevealed = true;
                if (el.isLastRevealItem) {
                    window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }

    hideInitially() {
        this.elementsToReveal.forEach(el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.elementsToReveal[this.elementsToReveal.length - 1].isLastRevealItem = true;
    }
}

export default RevealOnScroll;
