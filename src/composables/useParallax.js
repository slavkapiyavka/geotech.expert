import { onMounted, onUnmounted, ref } from 'vue';

export function useParallax() {
    const followedElement = ref(null);

    function updateBrightness() {
        if (!followedElement.value) return;

        const rect = followedElement.value.getBoundingClientRect();
        const knowledgeImageElementHeight = rect.height;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, knowledgeImageElementHeight) - rect.top);

        const brightnessLevel = Math.min(Math.max(rect.bottom / window.innerHeight, 0), 1);
        followedElement.value.style.filter = `brightness(${brightnessLevel})`;

        let percentage;
        if (rect.top < 0) {
            percentage = Math.min(100, 100 - (100 * visibleHeight / knowledgeImageElementHeight));
        } else {
            percentage = Math.max(0, 100 * rect.top / window.innerHeight);
        }

        followedElement.value.style.backgroundPositionY = `${percentage}%`;
    }

    function onScroll() {
        const textBlocks = document.querySelectorAll('.knowledge__text-on-image');
        if (textBlocks.length > 0) { // Проверка на наличие текстовых блоков
            let speedDifference = 0;

            textBlocks.forEach((block, index) => {
                const rect = block.getBoundingClientRect();

                speedDifference = 15 * index;
                const translateY = Math.floor((rect.top - window.innerHeight) * (0.1 + speedDifference / 100));
                block.style.transform = `translateY(${translateY}px)`;
            });
        }

        requestAnimationFrame(updateBrightness);
    }

    onMounted(() => {
        document.addEventListener('scroll', onScroll);
    });

    onUnmounted(() => {
        document.removeEventListener('scroll', onScroll);
    });

    return {
        followedElement,
    };
}
