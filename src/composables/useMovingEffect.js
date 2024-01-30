import { onMounted, onUnmounted } from 'vue';

export function useMovingEffect() {
    const updatePosition = () => {
        const elements = document.querySelectorAll('.moving');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const normalizedPosition = (elementCenter - viewportCenter) / viewportHeight;
            const translateY = normalizedPosition * 50;
            element.style.transform = `translateY(${translateY}px)`;
        });
    };

    onMounted(() => {
        window.addEventListener('scroll', updatePosition);
        updatePosition();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updatePosition);
    });
}
