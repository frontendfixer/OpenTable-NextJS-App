export default function generateFormattedTitle(str: string) {
  const strArr = str.split('-')
  const newArr = strArr.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1, el.length),
  )
  return `${newArr.slice(0, newArr.length - 1).join(' ')} (${newArr.pop()})`
}
