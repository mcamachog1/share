const log = document.getElementById("log");

//document.addEventListener("keydown", logKey);

document.querySelector("body").onkeydown = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
  if (e.code === "Enter") console.log(`Fue un enter ${e.code}`);
}
