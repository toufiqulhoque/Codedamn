const time = '12:10AM';

function convertTo24HrsFormat(time) {
    const isAM = time.includes('AM') ? true : false;
    const timeWithoutAmPm = time.replace(/AM/gi, '').replace(/PM/gi, '')
    const timeArray = timeWithoutAmPm.split(":")

    return isAM ? timeArray[0] == '12' ? '00' : getFormettedString(timeArray[0]) : timeArray[0] == '12' ? timeArray[0] : String((Number(timeArray[0]) + 12))

}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)