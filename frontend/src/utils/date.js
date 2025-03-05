export const formatDate = (date) => {
  if (!date) return ""; // Handle null or undefined

  const options = { day: "2-digit", month: "short" }; // "13Mar"
  return new Intl.DateTimeFormat("en-US", options)
    .format(new Date(date))
    .replace(" ", ""); // Remove space between day and month
};

export const calculateDaysDifference = (startDate, endDate) => {
  const start = new Date(startDate); // Convert startDate to Date object
  const end = new Date(endDate);     // Convert endDate to Date object
  
  // Calculate the difference in time (milliseconds)
  const differenceInTime = end - start;
  
  // Convert the time difference into days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24); // milliseconds to days

  return differenceInDays;
};
