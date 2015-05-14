/**
 * @file hasClass
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        // benchmark: http://jsperf.com/h-hasclass
        /**
         * 判断是否有某个className
         * @param {HTMLElement} element 元素
         * @param {string} className className
         */
        function hasClass(element, className) {
            var classNames = element.className;
            if (!classNames) {
                return false;
            }
            classNames = classNames.split(/\s+/);
            for (var i = 0, len = classNames.length; i < len; i++) {
                if (classNames[i] === className) {
                    return true;
                }
            }
            return false;
        }
        return hasClass;
    }
);
