// Converts state names to state abbr and vice versa
// Designed for use with Zapier "Code" block
// use "state" for Input Data key

// initial State name or abbr
const inputState = inputData.state ? inputData.state.trim().toLowerCase() : null;

// US States lookup array
const states = [
  { stateName: "Alabama", stateAbbr: "AL" },
  { stateName: "Alaska", stateAbbr: "AK" },
  { stateName: "Arizona", stateAbbr: "AZ" },
  { stateName: "Arkansas", stateAbbr: "AR" },
  { stateName: "California", stateAbbr: "CA" },
  { stateName: "Colorado", stateAbbr: "CO" },
  { stateName: "Connecticut", stateAbbr: "CT" },
  { stateName: "Delaware", stateAbbr: "DE" },
  { stateName: "Florida", stateAbbr: "FL" },
  { stateName: "Georgia", stateAbbr: "GA" },
  { stateName: "Hawaii", stateAbbr: "HI" },
  { stateName: "Idaho", stateAbbr: "ID" },
  { stateName: "Illinois", stateAbbr: "IL" },
  { stateName: "Indiana", stateAbbr: "IN" },
  { stateName: "Iowa", stateAbbr: "IA" },
  { stateName: "Kansas", stateAbbr: "KS" },
  { stateName: "Kentucky", stateAbbr: "KY" },
  { stateName: "Louisiana", stateAbbr: "LA" },
  { stateName: "Maine", stateAbbr: "ME" },
  { stateName: "Maryland", stateAbbr: "MD" },
  { stateName: "Massachusetts", stateAbbr: "MA" },
  { stateName: "Michigan", stateAbbr: "MI" },
  { stateName: "Minnesota", stateAbbr: "MN" },
  { stateName: "Mississippi", stateAbbr: "MS" },
  { stateName: "Missouri", stateAbbr: "MO" },
  { stateName: "Montana", stateAbbr: "MT" },
  { stateName: "Nebraska", stateAbbr: "NE" },
  { stateName: "Nevada", stateAbbr: "NV" },
  { stateName: "New Hampshire", stateAbbr: "NH" },
  { stateName: "New Jersey", stateAbbr: "NJ" },
  { stateName: "New Mexico", stateAbbr: "NM" },
  { stateName: "New York", stateAbbr: "NY" },
  { stateName: "North Carolina", stateAbbr: "NC" },
  { stateName: "North Dakota", stateAbbr: "ND" },
  { stateName: "Ohio", stateAbbr: "OH" },
  { stateName: "Oklahoma", stateAbbr: "OK" },
  { stateName: "Oregon", stateAbbr: "OR" },
  { stateName: "Pennsylvania", stateAbbr: "PA" },
  { stateName: "Rhode Island", stateAbbr: "RI" },
  { stateName: "South Carolina", stateAbbr: "SC" },
  { stateName: "South Dakota", stateAbbr: "SD" },
  { stateName: "Tennessee", stateAbbr: "TN" },
  { stateName: "Texas", stateAbbr: "TX" },
  { stateName: "Utah", stateAbbr: "UT" },
  { stateName: "Vermont", stateAbbr: "VT" },
  { stateName: "Virginia", stateAbbr: "VA" },
  { stateName: "Washington", stateAbbr: "WA" },
  { stateName: "West Virginia", stateAbbr: "WV" },
  { stateName: "Wisconsin", stateAbbr: "WI" },
  { stateName: "Wyoming", stateAbbr: "WY" }
];

// Utility: Convert "maryland" -> "Maryland"
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
}

// Convert logic
let result = null;
if (inputState) {
  if (inputState.length === 2) {
    // Convert abbreviation to state name
    const found = states.find(s => s.stateAbbr.toLowerCase() === inputState);
    result = found ? toTitleCase(found.stateName) : null;
  } else {
    // Convert name to abbreviation
    const found = states.find(s => s.stateName.toLowerCase() === inputState);
    result = found ? found.stateAbbr.toUpperCase() : null;
  }
}

output = { convertedState: result || "Invalid state input" };