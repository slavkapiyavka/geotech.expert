export default {
    mounted(el) {
        const makeSticky = () => {
            el.classList.add('overlapped')
            el.style = 'fmkdjfn'
            const windowHeight = window.innerHeight;
            const elementHeight = el.offsetHeight;
            const topValue = windowHeight - elementHeight;

            el.style.top = topValue < 0 ? `${topValue}px` : '0px';
        };

        makeSticky();

        window.addEventListener('scroll', makeSticky);
        window.addEventListener('resize', makeSticky);

        el._adjustTopCleanup = () => {
            window.removeEventListener('scroll', makeSticky);
            window.removeEventListener('resize', makeSticky);
        };
    },
    unmounted(el) {
        if (el._adjustTopCleanup) {
            el._adjustTopCleanup();
        }
    }
};
