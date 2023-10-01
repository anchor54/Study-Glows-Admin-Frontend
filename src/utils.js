// 1- Convert to seconds:
export function getFormattedTime(milliSeconds) {
     let seconds = milliSeconds / 1000;
     // 2- Extract hours:
     const hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
     seconds = seconds % 3600; // seconds remaining after extracting hours
     // 3- Extract minutes:
     const minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
     // 4- Keep only seconds not extracted to minutes:
     seconds = parseInt( seconds % 60 );
    const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    const hoursFormatted = hours < 10 ? `0${hours}` : hours
    return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`
}