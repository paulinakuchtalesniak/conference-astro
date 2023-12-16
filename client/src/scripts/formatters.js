export const formatTag = (tag) => {
  return tag
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatTime = (timeString) => {
  const dateEx = "1970-01-01 ";
  const dateTimeString = dateEx + timeString;
  const date = new Date(dateTimeString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + paddedMinutes + " " + ampm;
};

export const formatDate = (dateString) => {
  const parts = dateString.split("-");
  return parts[2] + "-" + parts[1] + "-" + parts[0];
};
