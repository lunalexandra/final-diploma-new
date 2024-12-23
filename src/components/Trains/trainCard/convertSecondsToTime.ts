export function convertSecondsToTime(seconds: number): string {
    const days = Math.floor(seconds / (24 * 60 * 60)); // Получаем количество дней
    seconds %= (24 * 60 * 60); // Остаток секунд после расчета дней
    
    const hours = Math.floor(seconds / 3600); // Получаем количество часов
    seconds %= 3600; // Остаток секунд после расчета часов

    const minutes = Math.floor(seconds / 60); // Получаем количество минут
    

    // Форматируем в строку
    let timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
    
    if (days > 0) {
        timeString = `${days}д ${timeString}`;
    }

    return timeString;
}