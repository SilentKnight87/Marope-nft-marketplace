/* Moralis init code */
<<<<<<< HEAD
const serverUrl = "https://cfcle0kimiqg.usemoralis.com:2053/server";
const appId = "Swj06DPVbh2uaZuBKnMSk7C0zkCMdx1XnEY0SIVY";
const TOKEN_CONTRACT_ADDRESS = "0x564548292fFedb974Ac5681C724665Fb9d3669e9"
=======
const serverUrl = "https://q692ea2bjwi8.usemoralis.com:2053/server";
const appId = "glT76XorRgD3fAX3G5z5p8ZTx8QhCQMfGE3bUBoW";
const TOKEN_CONTRACT_ADDRESS = "0x4a2c549180cF41A5bCd73779De12E5FC9218A298"
>>>>>>> 32be5836b919b480b1132520e7215c4aeae77c59
Moralis.start({ serverUrl, appId });
const tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);

//Assigns the username and email values to a var
// let userUsernameField = document.getElementById("txtUsername");
// let userEmailField = document.getElementById("txtEmail");

/* Authentication code */

// initUser = async () => {
//   if (await Moralis.User.current()){
//     hideElement
//   }
// }
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
  return user;
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

async function openUserInfo()  {
  const userUsernameField = document.getElementById("txtUsername");
  const userEmailField = document.getElementById("txtEmail");
  user = await Moralis.User.current();
  if (user){
    if(location.href != 'http://127.0.0.1:5502/frontend/signup.html'){
      location.href = 'signup.html'
    };

    const email = user.get('email');
    if(email){
      userUsernameField.value = email;
    }else{
      userEmailField.value = "";
    }

    userUsernameField.value = user.get('username')

    // location.href = 'signup.html';
  } else{
    login(); 
  }
}

async function saveUserInfo() {
  const userUsernameField = document.getElementById("txtUsername");
  const userEmailField = document.getElementById("txtEmail"); 
  user = await Moralis.User.current();
  user.set('email', userEmailField.value);
  user.set('username', userUsernameField.value);
  // if(user){
  //   const email = user.get('email');
  //   if(email){
  //     userEmailField.value = email;
  //   }else{
  //     userEmailField.value = "";
  //   }
  //   userUsernameField.value = user.get('username')
  //   console.log('this is username',userUsernameField.value)
  //   user.set('email', userEmailField.value);
  //   user.set('username', userUsernameField.value);
    await user.save();
    alert("User info saved successfully");
    openUserInfo();
  // }else{
  //   login(); 
  // }

}

async function createItems() {
  const createItemFile = document.getElementById("sign__file-upload");
  const createItemNameField = document.getElementById("itemname");
  const createItemDesciptionField = document.getElementById("description");


  if (createItemFile.files.lenght ==0){
    alert("Please select a file!");
    return;
  }else if (createItemNameField.value.lenght == 0){
    alert("Please give the item a name!");
    return;
  }

  const nftFile = new Moralis.File('nftFile.jpg', createItemFile.files[0]);
  await nftFile.saveIPFS();

  const nftFilepath = nftFile.ipfs();
  const nftFileHash = nftFile.hash();

  const metadata = {
    name: createItemNameField.value,
    description: createItemDesciptionField.value,
    nftFilepath: nftFilepath,
    nftFileHash: nftFileHash
  };

  const nftFileMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
  await nftFileMetadataFile.saveIPFS();

  const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();
  const nftFileMetadataFileHash = nftFileMetadataFile.hash();

  const Item = Moralis.Object.extend("Item");

  // Create a new instance of that class.
  const item = new Item();
  item.set('name', createItemNameField.value);
  item.set('description', createItemDesciptionField.value);
  item.set('nftFilepath', nftFilepath);
  item.set('nftFileHash', nftFileHash);
  item.set('metadataFilePath', nftFileMetadataFilePath);
  item.set('metadataFileHash', nftFileMetadataFileHash);
  await item.save();
  console.log('this is the item', item);

}


// userInfo

// mintNFT = async (metadataUrl) => {
//   const receipt = await tokenContract.methods.createItem(metadataUrl).send({from: ethereum.selectedAddress})
// console.log(receipt);
// return receipt.events.Trancfer.returnValues.tokenId;
// }


// document.getElementById("wallet_connect").onclick = login;
// document.getElementById("btnUserInfo").onclick = logOut;
const createItemForm = document.getElementById("createItem");

// const createItemNameField = document.getElementById("itemname");
// const createItemDesciptionField = document.getElementById("description");
const createItemPriceField = document.getElementById("price");
const createItemStatusField = document.getElementById("selectCreateItemStatus");
// const createItemFile = document.getElementById("sign__file-upload");




// const userEmailField = document.getElementById("txtEmail");

