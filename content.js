chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === 'replaceWords') {
      let regex = new RegExp('\\b' + message.oldWord + '\\b', 'gi');
      document.body.innerHTML = document.body.innerHTML.replace(regex, message.newWord);
    }
  });
