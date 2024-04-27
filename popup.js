document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('wordReplaceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let oldWord = document.getElementById('oldWord').value;
    let newWord = document.getElementById('newWord').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceWords', oldWord: oldWord, newWord: newWord });
    });
  });
});
