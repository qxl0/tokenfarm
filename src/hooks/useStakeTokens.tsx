import { useContractFunction, useEthers } from "@usedapp/core";
import TokenFarm from "../chain-info/TokenFarm.json";
import ERC20 from "../chain-info/MockERC20.json";
import networkMapping from "../chain-info/map.json";
import { constants, Contract, utils } from "ethers";
export const useStakeTokens = (tokenAddress: string) => {
  // approve
  // stake tokens
  const { chainId } = useEthers();
  const { abi } = TokenFarm;
  const tokenFarmAddress = chainId
    ? networkMapping[String(chainId)][0]
    : constants.AddressZero;
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
};
