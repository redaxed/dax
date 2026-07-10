const timeElement = document.querySelector("#seattle-time");

const seattleClock = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
});

function updateSeattleTime() {
  const now = new Date();
  timeElement.dateTime = now.toISOString();
  timeElement.textContent = seattleClock.format(now);
}

updateSeattleTime();
setInterval(updateSeattleTime, 1000);
