import Web3 from "web3";
import { config } from "../config";
const web3Public = new Web3(config.web3Provider);
const contractPublic = new web3Public.eth.Contract(
  config.oteex,
  config.oteexAbi
);
const usdtPublic = new web3Public.eth.Contract(config.usdt, config.usdtAbi);
const usdiPublic = new web3Public.eth.Contract(config.usdi, config.usdiAbi);
export default web3Public;
export { web3Public, contractPublic, usdtPublic, usdiPublic };
