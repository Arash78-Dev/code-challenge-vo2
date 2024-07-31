import moment from "jalali-moment";

export const formatToPersianDate = (dateString: string): string => {
  const date = moment(dateString).locale("fa");
  return date.format("D MMMM");
};

export const getWeeksBetweenDates = (endDate: string) => {
  // Ensure the dates are Date objects
  const start = new Date();
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = end.getTime() - start.getTime();

  // Convert milliseconds to weeks (1 week = 7 days = 7 * 24 * 60 * 60 * 1000 milliseconds)
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeks = Math.ceil(differenceInMilliseconds / millisecondsPerWeek);

  return weeks;
};
