// Simple EVM tx checker (placeholder)
// usage: node tx-check.js <txHash>
const { ethers } = require("ethers");

async function main() {
  const hash = process.argv[2];
  if(!hash){ 
    console.log("Usage: node tx-check.js <txHash>"); 
    process.exit(0);
  }
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL || "https://rpc.ankr.com/eth");
  const receipt = await provider.getTransactionReceipt(hash);
  console.log(receipt ? "Status:", receipt.status : "Tx not found");
}
main();
