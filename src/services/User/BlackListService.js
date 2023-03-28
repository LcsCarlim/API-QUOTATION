const blackList = [];

const tokenIsInBlackList = (token) => {
  return blackList.find(blacklisttoken => blacklisttoken === token);
};

const addTokenToBlackList = (token) => {
  blackList.push(token);
};

module.exports = ({ tokenIsInBlackList, addTokenToBlackList });
