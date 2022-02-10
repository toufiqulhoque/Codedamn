const str = 'XeroX';

function getTheGap(str) {
    firstIndex = str.indexOf('X')
    lastIndex = str.lastIndexOf('X')
    if (firstIndex === -1) return -1
    gapBetween = lastIndex - firstIndex
    return gapBetween
}

console.log(getTheGap(str))