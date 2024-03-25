import type Lenis from "@studio-freight/lenis/types";

declare global {
    interface Window {
        lenis: Lenis;
    }
}

function smoothScrollTo(target: number | string | HTMLElement, offset: number = -60) {
    const lenis: Lenis = window.lenis;
    lenis.scrollTo(target, {offset});
}

function copyEmailAddress(e: Event) {
    e.preventDefault();
    navigator.clipboard.writeText('harshilsharma63@gmail.com');
}

export default {
    smoothScrollTo,
    copyEmailAddress,
}