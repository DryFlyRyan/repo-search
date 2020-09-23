import languageColorMap from './languageColorMap';

const languageColorSelector = (language) => languageColorMap[language] || '#878787';

export default languageColorSelector;
