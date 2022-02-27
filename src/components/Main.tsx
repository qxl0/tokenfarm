import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";

export const Main = () => {
  // Show token values
  // get address of tokens
  // get balance of users wallet

  // send brownie-config to src/
  // send build order
  const { chainId } = useEthers();
  const networkName = chainId ? helperConfig[chainId] : "dev";
  console.log(chainId);
  console.log(networkName);

  const dappTokenAddress = chainId
    ? networkMapping[String(chainId)]["DappToken"][0]
    : constants.AddressZero;
  const wethTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["weth_token"]
    : constants.AddressZero;
  const fauTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["fau_token"]
    : constants.AddressZero;

  return <div>Hi</div>;
};
