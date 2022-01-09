module.exports = function toReadable (number) {
  const dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    next: {
      1: {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'ten'
      },
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
      0: '',
      next: {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
      }
    }
  }

  const str = number.toString().split('')
  let counter = str.length
  let result = ''
  while (counter) {
    switch (counter) {
      case 3: 
        result += `${dictionary[str[str.length - counter]]} hundred `
        break
      case 2:
        if (typeof dictionary.next[str[str.length - counter]] === 'string') {
          if (str[str.length - counter + 1] !== 0)
            result += `${dictionary.next[str[str.length - counter]]}`
          if (str[str.length - counter] !== '0')
            result += ' '
        }
        else {
          result += `${dictionary.next['1'][str[str.length - counter + 1]]}`
          counter--
        }
        break
      case 1:
        if ((result.length !== 0) && (str[str.length - counter] !== '0'))
          result += `${dictionary.next.next[str[str.length - counter]]}`
        else if (result.length === 0)
          result += `${dictionary.next.next[str[str.length - counter]]}`
        break
    }
    counter--
  }
  console.log(result)
  return result.trim()
}