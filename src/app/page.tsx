"use client"
import { ChainId, ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react"
import Main from "./main"
import Image from "next/image"

export default function Home() {
  const activeChainId = ChainId.BinanceSmartChainMainnet

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <div className="bg-[#002800]">
        <div className="navbar bg-[#131514] sticky top-0 z-10">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
            </a>
          </div>
          <div className="navbar-end">
            <ConnectWallet theme="dark" />
          </div>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <Image src="/hero.png" width={500} height={500} alt="hero" />
            <div>
              <h1 className="text-5xl font-bold">
                Welcome to the Lottery
              </h1>
              <button className="btn btn-primary" onClick={scrollDown}>
                Get Started
              </button>
            </div>
          </div>
        </div>
        <Main />
      </div>
    </ThirdwebProvider>
  )
}
