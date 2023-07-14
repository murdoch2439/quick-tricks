export const dateFormater = (element:string) => {
    const split = element.split("T")
    const customDate = split[0]
    let customTime = split[1].split("+")[0]
    customTime = customTime.substring(0, 5)
    return `${customDate} ${customTime}`

}
