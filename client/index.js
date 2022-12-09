const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl1 = 'http://localhost:1225';
const serverUrl2 = 'http://localhost:3000';

//copied from example.js
// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);
let i = Math.floor(Math.random()*niceList.length)
let name=niceList[i]


// get the root
const root = merkleTree.getRoot();
console.log(root)
// find the proof that norman block is in the list 
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);
const message1 = "Using await method"
const message2 = "Using .then method"


async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl1}/gift`, {name:name,proof:proof,message:message1});
    // TODO: add request body parameters here!
  console.log(gift);
}

 // change the await method to .then? 
function test() {
 

  axios.post(`${serverUrl1}/gift`, {name:name,proof:proof,message:message2}).then((result)=>{
    let {status:st,data:gift}=result
    console.log(st,gift)
  })
    // TODO: add request body parameters here!
}


main();
test()
