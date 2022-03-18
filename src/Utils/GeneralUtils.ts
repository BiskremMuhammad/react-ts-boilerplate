/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement a general utility helper functions
 */

/**
 * Instantiates a date Date object, used because doing the following doesn't
 * work in React-Native but does work in the browser.
 * ```
 * // Replace this with
 * var date = new Date('2020-08-11 21:23:00')
 * // with
 * var date = getDate('2020-08-11 21:23:00')
 * ```
 * @param {string} localDateTimeStr the date in the string format
 * @returns {Date} the Date object
 */
export const getDate = (localDateTimeStr: string): Date => {
  if (!localDateTimeStr) {
    return new Date(localDateTimeStr);
  }

  const match = localDateTimeStr.match(
    /(\d{4})-(\d{2})-(\d{2})[\sT](\d{2}):(\d{2}):(\d{2})(.(\d+))?/
  );

  if (!match) {
    return new Date(localDateTimeStr);
  }

  const [, year, month, date, hours, minutes, seconds, , millseconds] = match;

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(date),
    Number(hours),
    Number(minutes),
    Number(seconds),
    Number(millseconds || 0)
  );
};

/**
 * to properly display the date object
 * @param {Date} date the date to format
 * @returns {string} the date in a formatted string
 */
export const formatDate = (date: Date): string => {
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

/**
 * to properly display the hours of a date object
 * @param {Date} date the date to format
 * @returns {string} the time of the date in a formatted string
 */
export const formatDateToHours = (date: Date): string => {
  let hours = date.getHours();
  let minutes = date.getMinutes().toString();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = date.getMinutes() < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
};
