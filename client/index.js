const axios = require('axios');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {
	// TODO: how do we prove to the server we're on the nice list? 

	const name = "Norman Block"
	const merkleTree = new MerkleTree(niceList)
	const index = niceList.findIndex(n => n === name);
	const proof = merkleTree.getProof(index);

	const { data: gift } = await axios.post(`${serverUrl}/gift`, {
		name,
		proof
	});

	console.log({ gift });
}

main();
