import { formatUnits } from "@ethersproject/units";
import { useEthers, useTokenBalance } from "@usedapp/core";
import React from "react";
import BalanceMsg from "../BalanceMsg";
import { Token } from "../Main";

export interface WalletBalanceProps {
  token: Token;
}
export default function WalletBalance({ token }: WalletBalanceProps) {
  const { image, address, name } = token;
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);
  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  return (
    <BalanceMsg
      label={`Your un-staked ${name} balance`}
      tokenImgSrc={image}
      amount={formattedTokenBalance}
    />
  );
}
