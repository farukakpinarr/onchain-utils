// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Minimal example: ownership util placeholder
contract Example {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function isOwner(address a) external view returns (bool) {
        return a == owner;
    }
}
