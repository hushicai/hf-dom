/**
 * @file addClass
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var hasClass = require('./hasClass');

        /**
         * 添加className
         *
         * @param {HTMLElement} element 元素
         * @param {string} className className
         */
        function addClass(element, className) {
            if (!hasClass(element, className)) {
                element.className = [element.className, className].join(' ');
            }
        }
        return addClass;
    }
);
