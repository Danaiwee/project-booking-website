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

export const generateSingleDate = (date) => {
  // Ensure the input is a Date object
  const currentDate = new Date(date);

  // Return an array with a single date formatted as YYYY-MM-DD
  return [currentDate.toISOString().split("T")[0]];
};

export const generateDateArray = (startDate, endDate) => {
  // Ensure that startDate and endDate are Date objects
  const start = new Date(startDate); 
  const end = new Date(endDate);
  
  const dateArray = [];

  while (start <= end) {
    dateArray.push(new Date(start).toISOString().split("T")[0]); // Push in YYYY-MM-DD format
    start.setDate(start.getDate() + 1); // Move to next day
  }

  return dateArray;
};

export const formatDateRange = (date) => {
  const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
};

export const cancelDate = (date) => {
  const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" };

  const formattedDate = new Date(date);
  formattedDate.setDate(formattedDate.getDate() - 1);


  return formattedDate.toLocaleDateString("en-US", options);
};
