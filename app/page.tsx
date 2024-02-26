"use client"
import { useState } from "react"
import PlanItem from "./components/PlanItem"
import Toggle from "./components/Toggle"
import Image from "next/image"
import bgBottom from "@/public/bg-bottom.svg"
import bgTop from "@/public/bg-top.svg"

const plans = [
  {
    name: "Basic",
    storage: "500 GB",
    userNumbers: 2,
    bandwidth: "3 GB",
    link: "#",
    pricing: {
      monthly: 19.99,
      annually: 199.99,
    },
  },
  {
    name: "Professional",
    storage: "1 TB",
    userNumbers: 5,
    bandwidth: "10 GB",
    link: "#",
    pricing: {
      monthly: 24.99,
      annually: 249.99,
    },
  },
  {
    name: "Master",
    storage: "2 TB",
    userNumbers: 10,
    bandwidth: "20 GB",
    link: "#",
    pricing: {
      monthly: 39.99,
      annually: 399.99,
    },
  },
]

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <main className="relative mx-auto flex h-full w-full max-w-[90rem] flex-col px-6 py-16 lg:pb-[6.47rem] lg:pt-[4.2rem]">
      <Image
        src={bgTop}
        alt="backgoround pattern"
        className="absolute right-0 top-0 z-0"
      />
      <Image
        src={bgBottom}
        alt="backgoround pattern"
        className="absolute bottom-0 left-0 z-0"
      />
      <div className="relative z-10 mx-auto">
        <div className="mb-20 flex flex-col items-center gap-10 lg:mb-[4.03rem]">
          <h1 className="text-grayish-blue text-[2rem]">Our Pricing</h1>
          <div className="text-light-grayish-blue flex gap-6">
            <p>Annually</p>
            <Toggle
              checked={isMonthly}
              onChange={() => setIsMonthly((prevIsMonthly) => !prevIsMonthly)}
            />
            <p>Monthly</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0">
          {plans.map((plan) => (
            <PlanItem
              key={plan.name}
              plan={plan.name}
              price={isMonthly ? plan.pricing.monthly : plan.pricing.annually}
              storage={plan.storage}
              userNumbers={plan.userNumbers}
              bandwidth={plan.bandwidth}
              link={plan.link}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
