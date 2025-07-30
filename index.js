// Converts state names to state abbr and vice versa
// Designed for use with Zapier "Code" block
// use "state" for Input Data key

// initial State name or abbr
const inputState = inputData.state;

let outputState;

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

// conversion
function convert(lookupKey, lookupValue) {
  outputState = states.find((state) => state[lookupKey] === inputState)[lookupValue];
}

// check if input is state name or abbr
if (inputState.length === 2) {
  convert("stateAbbr", "stateName");
} else {
  convert("stateName", "stateAbbr");
};

// output converted value
output = {"convertedState": outputState};