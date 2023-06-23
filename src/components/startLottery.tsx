import { useState } from "react"
import { Web3Button } from "@thirdweb-dev/react"
import { parseUnits } from "ethers/lib/utils"

interface StartLotteryProps {
  lotContractAddress: string
}

export default function StartLottery({
  lotContractAddress,
}: StartLotteryProps) {
  const [lotteryRules, setLotteryRules] = useState({
    numOfWinners: "0",
    playersLimit: "0",
    registrationAmount: "0",
    adminFee: "0",
    tokenAddress: "0x0",
    tokenDecimals: "0",
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLotteryRules({ ...lotteryRules, [e.target.name]: e.target.value })
  }
  return (
    <div className="flex flex-col justify-center min-w-max">
      <h1 className="text-center text-2xl m-2 p-2">Start Lottery</h1>

      <div className="flex flex-col justify-center">
        <label htmlFor="numOfWinners" className="m-2 p-2">
          Number of Winners:
        </label>
        <input
          type="text"
          name="numOfWinners"
          onChange={inputHandler}
          value={lotteryRules.numOfWinners}
          className="rounded m-2 p-2"
        />
        <label htmlFor="playersLimit" className="m-2 p-2">
          Players Limit:
        </label>
        <input
          type="text"
          name="playersLimit"
          onChange={inputHandler}
          value={lotteryRules.playersLimit}
          className="rounded m-2 p-2"
        />
        <label htmlFor="registrationAmount" className="m-2 p-2">
          Registration Amount:
        </label>
        <input
          type="text"
          name="registrationAmount"
          onChange={inputHandler}
          value={lotteryRules.registrationAmount}
          className="rounded m-2 p-2"
        />
        <label htmlFor="adminFee" className="m-2 p-2">
          Admin Fee Percentage:
        </label>
        <input
          type="text"
          name="adminFee"
          onChange={inputHandler}
          value={lotteryRules.adminFee}
          className="rounded m-2 p-2"
        />
        <label htmlFor="tokenAddress" className="m-2 p-2">
          Token Address:
        </label>
        <input
          type="text"
          name="tokenAddress"
          onChange={inputHandler}
          value={lotteryRules.tokenAddress}
          className="rounded m-2 p-2"
        />
        <label htmlFor="tokenDecimals" className="m-2 p-2">
          Token Decimals:
        </label>
        <input
          type="text"
          name="tokenDecimals"
          onChange={inputHandler}
          value={lotteryRules.tokenDecimals}
          className="rounded m-2 p-2"
        />
        <Web3Button
          contractAddress={lotContractAddress}
          action={(contract) =>
            contract.call("setLotteryRules", [
              lotteryRules.numOfWinners,
              lotteryRules.playersLimit,
              parseUnits(
                lotteryRules.registrationAmount,
                lotteryRules.tokenDecimals
              ),
              lotteryRules.adminFee,
              lotteryRules.tokenAddress,
            ])
          }
          className="!m-2 !p-2"
        >
          Start Lottery
        </Web3Button>
      </div>
    </div>
  )
}
