const tokenListing = [];

const tokenIsInListing = (token) => {
  return tokenListing.includes(token);
};

const addTokenToListing = (token) => {
  tokenListing.push(token);
};

module.exports = { tokenIsInListing, addTokenToListing };
