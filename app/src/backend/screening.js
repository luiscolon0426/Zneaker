import { uid } from './auth';

// Allows only authorized users to access the apps functionality
export const securityClearence = async function securityClearence () {
  const authorizedIds = [
    'djYi4ZLzzkQpcMa28h7CKpaOJEa2',
    'yzg4qeZbkvcULl9sBxRVnpQXt8g1',
    '0ntfA5XkLlZnjzSf4aRdtA9Rqi02'
  ];

  let match = false;
  authorizedIds.forEach(id => {
    if (uid === id) {
      match = true;
    }
  });

  return match;
};

// Converts special HTML characters for javascript processing
export const htmlScreening = function htmlScreening (fileContent) {
  const entities = [
    '&lt;',
    '&gt;',
    '&amp;',
    '&quot;',
    '&apos;'
  ];

  const results = [
    '<',
    '>',
    '&',
    '"',
    "'"
  ];

  let newFileContent;
  let symbol;

  // Replaces each matched "entites" character in string with its "results" counterpart
  entities.forEach((entity, index) => {
    symbol = entity.replace(/['"]+/g, '');
    const re = new RegExp(symbol, 'g');
    if (re.test(fileContent)) {
      if (!newFileContent) {
        newFileContent = fileContent.replace(re, results[index]);
      } else {
        newFileContent = newFileContent.replace(re, results[index]);
      }
    }
  });
  if (newFileContent) {
    return newFileContent;
  } else {
    return fileContent;
  }
};

// Displays "Logging in" box to delay users from going "Into the pocket too early"
export const loggingUserIn = function loggingUserIn () {
  const el = document.createElement('div');
  el.setAttribute('class', 'blocker');
  el.innerHTML = 'Logging in...';
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, 3000);
  document.body.appendChild(el);
};
