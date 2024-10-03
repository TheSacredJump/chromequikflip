chrome.runtime.onInstalled.addListener(() => {
  console.log("QuikFlip extension installed.");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("QuikFlip extension starting up.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "logMessage") {
    console.log("Message from content script:", request.message);
    sendResponse({status: "Message logged successfully"});
  } else if (request.action === "linkWallet") {
    console.log("Linking wallet:", request.data);
    sendResponse({status: "Wallet linking process initiated"});
  } else {
    sendResponse({status: "Unknown action"});
  }
  return true; // Keep the messaging channel open for asynchronous response
});