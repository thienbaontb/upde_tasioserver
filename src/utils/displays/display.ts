export class Display {
    static showDoubleCharacters(str: string) {
        return (str.length < 2) ? `0${str}` : str;
    }

    static showPrice(str: string) {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}