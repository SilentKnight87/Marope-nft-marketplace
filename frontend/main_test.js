/* Moralis init code */
const serverUrl = "https://masdi5ewxhhw.usemoralis.com:2053/server";
const appId = "1bZMC0KVQeXFRu5HojPeKBA5GJ57psWKX3MJ3Kkj";
Moralis.start({ serverUrl, appId });
/* Authentication code */

initUser = async () => {
  if (await Moralis.User.current()){
    hideElement
  }
}
console.log('It got clicked')
async function login() {
  let user = Moralis.User.current();
  console.log('This is user',user)
  if (!user) {
    
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}
// document.getElementById("wallet_connect").onclick = login;
// document.getElementById("btnUserInfo").onclick = logOut;
// const userInfo = document.getElementById("userInfo");
