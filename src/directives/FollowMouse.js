export default {
    mounted(el) {
        el.style.transition = 'all 250ms ease';

        const handleMouseMove = event => {
            const { left, top } = el.getBoundingClientRect();
            let translateX = event.clientX - left - el.offsetWidth / 2;
            let translateY = event.clientY - top - el.offsetHeight / 2;

            translateX = Math.max(-8, Math.min(8, translateX));
            translateY = Math.max(-8, Math.min(8, translateY));

            el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        };

        const handleMouseLeave = () => {
            el.style.transform = 'translate3d(0px, 0px, 0px)';
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        el.__cleanup__ = () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    },
    unmounted(el) {
        if (el.__cleanup__) {
            el.__cleanup__();
        }
    }
};
