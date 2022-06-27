export const callNativeFunction = (functionName, params = null) => {
    if (isIOS()) {
        window.webkit.messageHandlers[functionName].postMessage(JSON.stringify(params));
    } else {
        if (params) {
            window.androidInterface[functionName](params);
        } else {
            window.androidInterface[functionName]();
        }
    }
};
