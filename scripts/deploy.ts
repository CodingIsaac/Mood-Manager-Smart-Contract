import { ethers } from "hardhat";

const main = async () => {
    const Mood = await ethers.getContractFactory("moodDiary");
    const mood = await Mood.deploy();
    await mood.deployed();

    console.log("Todo  Contract deployed to:", mood.address);
}

// 0x7779F25f0dE514Aa686fAC9C8049B8F48B5a28bA address deployed to.

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });