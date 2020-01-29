import Web3 from "web3";
import { config } from "../config";
const web3Public = new Web3(config.web3Provider);
const contractPublic = new web3Public.eth.Contract(
  config.oteexAbi,
  config.oteex
);
const otePublic = new web3Public.eth.Contract(config.usdiAbi, config.ote);
const usdtPublic = new web3Public.eth.Contract(config.usdtAbi, config.usdt);
const usdiPublic = new web3Public.eth.Contract(config.usdiAbi, config.usdi);
export default web3Public;
export { web3Public, contractPublic, usdtPublic, usdiPublic, otePublic };
