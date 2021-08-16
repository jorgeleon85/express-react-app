const searchFilter = (data, text, field) => {
  return data.filter((item) => {
    if (text === "" || field === "") return true;
    if (!item[field]) {
      console.error(`Field doesn't exist, might be an issue with data`);
      return false;
    }
    const fieldText = String(item[field]).toLowerCase();
    if (fieldText.indexOf(text.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  });
};

export default searchFilter;
