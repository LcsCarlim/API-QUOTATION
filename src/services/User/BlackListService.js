const blackList = [];

const tokenIsInBlackList = (token) => {
  console.log(blackList, token);
  return blackList.find(blacklisttoken => blacklisttoken === token);
};

const addTokenToBlackList = (token) => {
  blackList.push(token);
  console.log(blackList);
};

module.exports = ({ tokenIsInBlackList, addTokenToBlackList });
