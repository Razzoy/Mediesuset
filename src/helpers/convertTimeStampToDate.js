

export function convertTimeStampToDate(timestamp) {

    const arrayDays = [
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
        "Søndag",
      ];

    let date = new Date(timestamp);
    let day = date.getDay();
    let dayName = arrayDays[day]
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeString = `${dayName} KL. ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
    return timeString;
  }