export const randomGenerate = (min = 0, max = 0) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}