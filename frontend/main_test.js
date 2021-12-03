/* Moralis init code */
const serverUrl = "";
const appId = "";
Moralis.start({ serverUrl, appId });
/* Authentication code */
console.log('It got clicked')
async function login() {
  let user = Moralis.User.current();
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
