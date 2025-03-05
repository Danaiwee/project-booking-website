export const formatDate = (date) => {
  if (!date) return ""; // Handle null or undefined

  const options = { day: "2-digit", month: "short" }; // "13Mar"
  return new Intl.DateTimeFormat("en-US", options)
    .format(new Date(date))
    .replace(" ", ""); // Remove space between day and month
};
