import dayjs from "dayjs";
const maxDays = 5;

export function getNextDays() {
  const days: string[] = [];
  const today = new Date();

  for (let i = 0; i < maxDays; i++) {
    const date = new Date();
    date.setDate(today.getDate() + (i + 1));
    days.push(dayjs(date).format('DD/MM'));
  }

  return days;
}