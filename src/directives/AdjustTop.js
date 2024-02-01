export default {
    mounted(el) {
        el.setAttribute('style', 'position: sticky; top: 0; z-index: 0;');
        const adjustTop = () => {
            const windowHeight = window.innerHeight;
            const elementHeight = el.offsetHeight;
            const topValue = windowHeight - elementHeight;

            el.style.top = topValue < 0 ? `${topValue}px` : '0px';
        };

        adjustTop();

        window.addEventListener('scroll', adjustTop);
        window.addEventListener('resize', adjustTop);

        el._adjustTopCleanup = () => {
            window.removeEventListener('scroll', adjustTop);
            window.removeEventListener('resize', adjustTop);
        };
    },
    unmounted(el) {
        if (el._adjustTopCleanup) {
            el._adjustTopCleanup();
        }
    }
}