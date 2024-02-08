import { onMounted, onUnmounted } from "vue";

export function useVisibilityEffect(query) {
    onMounted(() => {
        const visibilityObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.15
        });

        const elements = document.querySelectorAll(query);
        elements.forEach(element => {
            visibilityObserver.observe(element);
        });

        onUnmounted(() => {
            visibilityObserver.disconnect();
        });
    });
}
