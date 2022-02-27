import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: theme.spacing(1),
    alignItems: "center",
  },
  tokenImg: {
    width: "32px",
  },
  amount: {
    fontWeight: "bold",
  },
}));
export interface BalanceMsgProps {
  label: string;
  tokenImgSrc: string;
  amount: number;
}
export default function BalanceMsg({
  label,
  tokenImgSrc,
  amount,
}: BalanceMsgProps) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>{label}</div>
      <div className={classes.amount}>{amount}</div>
      <img className={classes.tokenImg} src={tokenImgSrc} alt="token logo" />
    </div>
  );
}
