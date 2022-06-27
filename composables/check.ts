export const isIOS = () => {
    let userAgent = window.navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
};

export const isMobile = () => {
    let userAgent = window.navigator.userAgent;
    if (/Android/i.test(userAgent)) {
        return true;
    } else return /iPhone|iPad|iPod/i.test(userAgent);
};
