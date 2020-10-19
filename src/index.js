module.exports = function toReadable (num) {
  numRanksList = num.toString().split('').reverse();
  first20 = {
    0: null,
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  if (num === 0) {
    return 'zero';
  } else if (num < 20) {
    return first20[num];
  } else {
    return mapper(numRanksList);
  }

  function mapper(numRanksList) {
    let readable = [];
    const lastListIndex = numRanksList.length - 1;
    for (let index = lastListIndex; index >= 0; index--) {
      let n = numRanksList[index];
      let readableRank = first20[n];
      if (index > 1) {
        let suffix = '';
        switch (index) {
          case 3:
            suffix = 'thousand';
            break;
          case 2:
            suffix = 'hundred';
            break;
          default:
            break;
        }
        if (readableRank) {
          readable.push(`${readableRank} ${suffix}`);
          continue;
        }
      } else if (index == 1) {
        // десятки
        let twoLastNumbers = num.toString().slice(-2);
        if (Number(twoLastNumbers < 20)) {
          readableRank = first20[Number(twoLastNumbers)];
          readable.push(readableRank);
          break;
        }
        switch (n) {
          case '2':
            readable.push('twenty');
            break;
          case '3':
            readable.push('thirty');
            break;
          case '4':
            readable.push('forty');
            break;
          case '5':
            readable.push('fifty');
            break;
          case '6':
            readable.push('sixty');
            break;
          case '7':
            readable.push('seventy');
            break;
          case '8':
            readable.push('eighty');
            break;
          case '9':
            readable.push('ninety');
            break;
          case '0':
            readable.push(null);
            break;
        }
      } else if (index == 0) {
        readable.push(first20[n]);
      }
    }
    console.log(readable);
    return readable.filter((x) => x).join(' ');
  }
}
