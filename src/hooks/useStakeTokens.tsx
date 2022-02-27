import { useContractFunction, useEthers } from "@usedapp/core";
import TokenFarm from "../chain-info/TokenFarm.json";
import ERC20 from "../chain-info/MockERC20.json";
import networkMapping from "../chain-info/map.json";
import { constants, Contract, utils } from "ethers";
import { useState } from "react";

export function useStakeTokens(tokenAddress: string) {
  // approve
  // stake tokens
  const { chainId } = useEthers();
  console.log(chainId, "🍉");
  const { abi } = TokenFarm;
  // console.log(abi, "🫐");
  const tokenFarmAddress = chainId
    ? networkMapping[String(chainId)]["TokenFarm"][0]
    : constants.AddressZero;
  console.log(tokenFarmAddress, "🖕");
  const tokenFarmInterface = new utils.Interface(abi);
  const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface);

  const erc20ABI = ERC20.abi;
  const erc20Interface = new utils.Interface(erc20ABI);
  const erc20Contract = new Contract(tokenAddress, erc20Interface);

  // aprove
  // stake tokens
  const { send: approveErc20Send, state: approveErc20State } =
    useContractFunction(erc20Contract, "approve", {
      transactionName: "Approve ERC20 transfer",
    });

  const approve = (amount: string) => {
    return approveErc20Send(tokenFarmAddress, amount);
  };

  const [state, setState] = useState(approveErc20State);
  return { approve, state };
}
