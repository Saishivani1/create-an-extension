chrome.declarativeNetRequest.onRuleListChanged.addRules(
  { ruleResources: [{ id: "block_sites", enabled: true }] },
  () => {
    if (chrome.runtime.lastError) {
      console.error(
        "Failed to set up blocking rules:",
        chrome.runtime.lastError
      );
    } else {
      console.log("Blocking rules successfully applied");
    }
  }
);
