/**
 * @file removeClass
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var hasClass = require('./hasClass');

        /**
         * 删除元素className
         *
         * @param {HTMLElement} element 元素
         * @param {string} className className
         */
        function removeClass(element, className) {
            if (className && hasClass(element, className)) {
                var classNames = element.className.split(/\s+/);
                for (var i = 0, len = classNames.length; i < len; i++) {
                    if (classNames[i] === className) {
                        classNames.splice(i, 1);
                        break;
                    }
                }
            }
            element.className = classNames.join(' ');
        }

        return removeClass;
    }
);
