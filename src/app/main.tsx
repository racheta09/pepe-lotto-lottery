"use client"
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react"
import EnterLottery from "@/components/enterLottery"
import ClaimReward from "@/components/claimReward"
import AdminSection from "@/components/adminSection"
export default function Main() {
  const address = useAddress()
  const lotContractAddress = "0x098148F5ff6b5D4629E0d6F5604be3FBb0030286"
  const { data: lotcontract } = useContract(lotContractAddress)
  const { data: lotStatus } = useContractRead(lotcontract, "lotteryStatus")
  const { data: owner } = useContractRead(lotcontract, "owner")
  const { data: lotData } = useContractRead(lotcontract, "lotteryConfig")

  return (
    <main className="flex flex-col items-center w-full m-auto h-full">
      {lotStatus == "0" ? (
        <h3 className="text-3xl text-center m-4 p-4">
          Lottery Not Started Yet
        </h3>
      ) : lotStatus == "0" ? (
        <EnterLottery
          ercContractAddress={lotData?.lotteryTokenAddress}
          lotContractAddress={lotContractAddress}
          registrationAmount={lotData?.registrationAmount}
          numOfWinners={lotData?.numOfWinners}
          playersLimit={lotData?.playersLimit}
        />
      ) : lotStatus == "0" ? (
        <ClaimReward
          lotContractAddress={lotContractAddress}
          numOfWinners={parseInt(lotData?.numOfWinners)}
        />
      ) : (
        ""
      )}
      {owner && owner == address ? (
        <AdminSection
          lotContractAddress={lotContractAddress}
          lotStatus={lotStatus}
        />
      ) : (
        ""
      )}
    </main>
  )
}
