import { formatUnits } from "@ethersproject/units";
import { useEthers, useTokenBalance } from "@usedapp/core";
import React from "react";
import { Token } from "../Main";

export interface WalletBalanceProps {
  token: Token;
}
export default function WalletBalance({ token }: WalletBalanceProps) {
  const { image, address, name } = token;
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);
  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance))
    : 0;

  return (
    <div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{formattedTokenBalance}</div>
    </div>
  );
}
