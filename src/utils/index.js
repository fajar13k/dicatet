const showFormattedDate = (date) => {
  let localeFormat;
  const locale = localStorage.getItem('locale');
  
  switch (locale) {
    case 'en':
      localeFormat = "en-GB";
      break;
    case 'fr':
      localeFormat = "fr-FR";
      break;
    case 'id':
      localeFormat = "id-ID";
      break;
    default:
      localeFormat = "en-GB";
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(localeFormat, options);
};

export { showFormattedDate };
