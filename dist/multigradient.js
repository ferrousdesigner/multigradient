'use strict';

function MultiGradient(target, colors, blend) {
    if (!target && !colors) {
        console.log('%c No paramters supplied.', 'color: #ff6060');
        return;
    }
    var parent = document.querySelector(target);
    if (!parent) {
        console.log('%c Make sure you provided element exist in dom.', 'color: #ff6060');
        return;
    }
    if (!colors.length) {
        console.log('%c Please provide correct parameters.', 'color: #ff6060');
        return;
    }
    var validColors = colors.filter(function (color) {
        if (!color.match(/(#([0-9a-f]{3}){1,2}|(rgba|hsla)\(\d{1,3}%?(,\s?\d{1,3}%?){2},\s?(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?\)){2})/i)) {
            console.log('%c Provided color \'' + color + '\' is not a valid color.', 'color: #ff6060');
        } else {
            return color;
        }
    });
    if (validColors.length > 0 && (colors.length == 4 || colors.length == 6) && validColors.length === colors.length) {
        if (parent.style.position === '' || parent.style.position === 'unset') parent.style.position = 'relative';
        parent.style.background = 'rgba(0,0,0,0)';
        var frame = document.createElement('DIV');
        frame.style.position = 'absolute';
        frame.style.left = '0';
        frame.style.top = '0';
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.zIndex = '-1';
        frame.style.pointerEvents = 'none';
        frame.style.overflow = 'hidden';
        frame.style.borderRadius = parent.style.borderRadius || getComputedStyle(parent).borderRadius;
        parent.appendChild(frame);
        parent = frame;
        var fullWidth = parent.getBoundingClientRect().width;
        var quad = validColors.length === 4;
        var childWidth = quad ? fullWidth / 2 : fullWidth / 3;
        createColorNode(parent, null, null, false, true, validColors);
        validColors.forEach(function (color, i) {
            var position = getPosition(i, childWidth, quad);
            createColorNode(parent, color, position, childWidth, null, null, i);
        });
    } else {
        console.log('%c Please provide color array of 4 colors for QuadGradient or 6 Colors for HexaGradient of less', 'color: #ff6060');
    }
    function getPosition(i, childWidth, quad) {
        switch (i) {
            case 0:
                return { left: 0, top: 0 };
            case 1:
                return { left: quad ? '50%' : '66.6%', top: 0 };
            case 2:
                return { left: 0, top: '50%' };
            case 3:
                return { left: quad ? '50%' : '66.6%', top: '50%' };
            case 4:
                return { left: childWidth + 'px', top: 0 };
            case 5:
                return { left: childWidth + 'px', top: '50%' };
        }
    }
    function createColorNode(parent, color, position, width, isBackground, colorsArray, i) {
        var child = document.createElement('DIV');
        child.style.backgroundColor = isBackground ? '#000000' : color;
        if (isBackground) {
            var colorString = colorsArray[0] + ', ' + colorsArray[colorsArray.length - 1];
            var gradientString = 'linear-gradient(to bottom right, ' + colorString + ')';
            child.style.backgroundImage = gradientString;
        }
        child.style.position = 'absolute';
        child.style.left = isBackground ? 0 : position.left;
        child.style.top = isBackground ? 0 : position.top;
        child.style.zIndex = isBackground ? '-4' : i > 0 && i < 3 ? '-1' : '-2';
        child.style.width = isBackground ? '100%' : width + 'px';
        child.style.filter = isBackground ? 'none' : 'blur(' + getBlur(blend) + 'px)';
        child.style.pointerEvents = 'none';
        child.style.transform = isBackground ? 'none' : 'scale(1.8)';
        child.style.transformOrigin = getOrigin(i);
        child.style.height = isBackground ? '100%' : parent.getBoundingClientRect().height / 2 + 'px';
        child.style.borderRadius = isBackground ? parent.style.borderRadius : '0%';
        parent.appendChild(child);
    }
    function getOrigin(i) {
        switch (i) {
            case 0:
                return 'right bottom';
            case 1:
                return 'left bottom';
            case 2:
                return 'right top';
            case 3:
                return 'left top';
        }
    }
    function getBlur(blend) {
        switch (blend) {
            case 'smooth':
                return '50';
            case 'smoother':
                return '100';
            case 'smoothest':
                return '200';
            default:
                return '50';
        }
    }
}