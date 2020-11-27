
const clock = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  const remain = (xmasDay - date) / 1000;

  const days = Math.floor(remain / 86400);
  const hours = Math.floor((remain % 86400) / 3600);
  const minutes = Math.floor(((remain % 86400) % 3600) / 60);
  const seconds = Math.floor(((remain % 86400) % 3600) % 60);

  clock.innerText = `${days > 0 && days < 10 ? `0${days}` : days}d ${
                        hours > 0 && hours < 10 ? `0${hours}` : hours}h ${
                        minutes > 0 && minutes < 10 ? `0${minutes}` : minutes}m ${
                        seconds > 0 && seconds < 10 ? `0${seconds}` : seconds}s`;
                    }

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
