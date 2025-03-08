// DOM Elements
const spamchecker = document.getElementById('spamform');
const resultt = document.getElementById('result');
const inputt = document.getElementById('message');

// API Configuration
const api = 'http://localhost:5000/detectspamornot';
const requestmakers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const alerts = {
  empty: 'Please enter a message to analyze!',
  networkerror: 'Network issues - please check your connection',
  servererror: 'Temporary server problems - try again later',
  defaulte: 'Something is wrong - please try again'
};

const classifications = {
  SPAM: 'spam',
  HAM: 'ham'
};

document.addEventListener('DOMContentLoaded', myspamdetector);

function myspamdetector() {
    spamchecker.addEventListener('submit', handleing);
}

async function handleing(event) {
  event.preventDefault();
  clearprevious();

  const userMessage = reqmessage();
  
  if (!userMessage) {
    alertsdisplay('warning', alerts.empty);
    return;
  }

  try {
    const analysisResult = await messageanalysiss(userMessage);
    giveanlaysis(analysisResult);
  } catch (error) {
    errorhandling(error);
  }
}

function reqmessage() {
  return inputt.value.trim();
}

function clearprevious() {
    resultt.innerHTML = '';
}

async function messageanalysiss(message) {
  const requestBody = new URLSearchParams({ message });
  
  const response = await fetch(api, {
    method: 'POST',
    headers: requestmakers,
    body: requestBody
  });

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  return response.json();
}

function giveanlaysis(resultData) {
  const isSpam = resultData.spamornot === classifications.SPAM;
  const alertType = isSpam ? 'danger' : 'success';
  const displayText = `Analysis Result:   ${resultData.spamornot.toUpperCase()}`;

  alertsdisplay(alertType, displayText);
}

function errorhandling(error) {
  console.error('Detection Error:', error);
  const errorMessage = geterrors(error);
  alertsdisplay('danger', errorMessage);
}

function geterrors(error) {
  if (error.message.includes('Network')) return alerts.networkerror;
  if (error.message.includes('Server')) return alerts.servererror;
  return alerts.defaulte;
}

function alertsdisplay(type, message) {
  const alertHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
    </div>
  `;
  resultt.innerHTML = alertHTML;
}