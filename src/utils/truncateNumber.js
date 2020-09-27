const truncateNumber = (number) => {
  if (
    typeof number !== 'number'
    || number < 1000
  ) {
    return number;
  } 

  const preppedNumber = number.toString().split('');

  const numberSlices = preppedNumber.reduceRight((numArr, char) => {
    if (!numArr.length || numArr[0].length === 3) {
      numArr.unshift([char]);
    } else {
      numArr[0].unshift(char);
    }
    return numArr;
  }, []);

  return `${numberSlices[0].join('')}.${numberSlices[1][0]}${numberSlices.length === 2 ? 'k' : 'm'}`;
}

export default truncateNumber;
