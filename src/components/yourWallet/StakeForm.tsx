import { formatUnits } from "@ethersproject/units";
import { Button, CircularProgress, Input } from "@material-ui/core";
import { useEthers, useNotifications, useTokenBalance } from "@usedapp/core";
import { utils } from "ethers";
import React, { useEffect, useState } from "react";
import { useStakeTokens } from "../../hooks";
import { Token } from "../Main";

export interface StakeFormProps {
  token: Token;
}
export default function StakeForm({ token }: StakeFormProps) {
  const { address: tokenAddress, name } = token;
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(tokenAddress, account);
  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  const { notifications } = useNotifications();

  const [amount, setAmount] = useState<
    number | string | Array<number | string>
  >(0);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount =
      event.target.value === "" ? "" : Number(event.target.value);
    setAmount(newAmount);
    console.log(amount);
  };

  const { approveAndStake, approveErc20State } = useStakeTokens(tokenAddress);

  const handleStakeSubmit = () => {
    const amountAsWei = utils.parseEther(amount.toString());
    return approveAndStake(amountAsWei.toString());
  };

  const isMining = approveErc20State.status === "Mining";
  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Approve ERC20 transfer"
      ).length > 0
    ) {
      console.log("Approved!");
    }
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Stake Tokens"
      ).length > 0
    ) {
      console.log("Stake Approved!");
    }
  }, [notifications]);
  return (
    <>
      <Input onChange={handleInputChange} />
      <Button
        onClick={handleStakeSubmit}
        color="primary"
        size="large"
        disabled={isMining}
      >
        {isMining ? <CircularProgress size={26} /> : "Stake"}
      </Button>
    </>
  );
}
