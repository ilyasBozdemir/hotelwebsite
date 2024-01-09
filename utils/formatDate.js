export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = `0${d.getUTCMonth() + 1}`.slice(-2);
    const day = `0${d.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };
  