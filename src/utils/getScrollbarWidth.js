import css from 'dom-css';
let scrollbarWidth = false;
let defaultScrollbarWidth = 0;

export function setDefaultScrollbarWidth(width) {
    defaultScrollbarWidth = width;
}

export default function getScrollbarWidth(cacheEnabled = true) {
    if (cacheEnabled && scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.className = 'react-custom-scrollbars-layer';
        css(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = (div.offsetWidth - div.clientWidth);
        document.body.removeChild(div);
    } else {
        scrollbarWidth = defaultScrollbarWidth;
    }
    return scrollbarWidth || defaultScrollbarWidth;
}
