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
  const start = new Date(startDate);
  const end = new Date(endDate);

  const dateArray = [];
  while (start <= end) {
    dateArray.push(
      `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`
    );
    start.setDate(start.getDate() + 1);
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

export const formatStartAndEndDate = (dateArray) => {
  if (!dateArray || dateArray.length === 0) return null;

  const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric" };

  // Convert first date (startDate)
  const startDate = new Date(dateArray[0]);
  const formattedStartDate = startDate.toLocaleDateString("en-US", options);

  // Convert last date + 1 day (endDate)
  const endDate = new Date(dateArray[dateArray.length - 1]);
  endDate.setDate(endDate.getDate() + 1);
  const formattedEndDate = endDate.toLocaleDateString("en-US", options);

  return { startDate: formattedStartDate, endDate: formattedEndDate };
};
