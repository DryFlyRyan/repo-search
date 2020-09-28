import * as utils from './index';

describe('formatDate', () => {
  // Left blank since most of the tests we would put here would not be
  // testing our code, but rather testing whether `date-fns` is
  // operating correctly
});

describe('languageColorSelector.js', () => {
  test('Will return the correct color from languageColorMap.js', () => {
    expect(utils.languageColorSelector('ColdFusion')).toEqual('#ed2cd6')
  });
  test('Will return a dummy color if presented with bad data', () => {
    expect(utils.languageColorSelector('COBOL')).toEqual('#878787')
  });
});

describe('truncateNumber.js', () => {
  test('Will correctly truncate `1300` into `1.3k`', () => {
    expect(utils.truncateNumber(1300)).toEqual('1.3k')
  });
  test('Will not *currently* round `1350` to `1.4k`', () => {
    expect(utils.truncateNumber(1350)).toEqual('1.3k')
  });
  test('Will return a number that\'s less than `1000` stringified', () => {
    expect(utils.truncateNumber(647)).toEqual('647')
  });
  test('Will return a non-number right back to you', () => {
    expect(utils.truncateNumber('💩')).toEqual('💩')
  })
}) 
