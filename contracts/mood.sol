// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;



contract moodDiary{
    
    string everyDayMood;
    
    
    function setMood(string memory _mood) public{
        everyDayMood = _mood;
    }
    
    //create a function the reads the mood from the smart contract
    function getMood() public view returns(string memory){
        return everyDayMood;
    }
}