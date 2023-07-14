export const uppercasingFirstLetterOfEachWord = (word: string) => {
    const splitted = word.split(' ')

    for (let i = 0; i < splitted.length; i++) {

        splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1)
    }
    return splitted.join(' ')
}
