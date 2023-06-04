chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "siteBlocked") {
    alert("Access to this site is blocked.");
  }
});
