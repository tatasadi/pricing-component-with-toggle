import React from "react"
import { cn } from "../lib/utils"

interface PlanItemProps {
  plan: string
  price: number
  storage: string
  userNumbers: number
  bandwidth: string
  link: string
  className?: string
}

const PlanItem: React.FC<PlanItemProps> = ({
  plan,
  price,
  storage,
  userNumbers,
  bandwidth,
  link,
  className = "",
}) => {
  return (
    <div
      className={cn(
        plan === "Professional"
          ? "bg-custom-gradient text-white lg:py-[3.1rem]"
          : "bg-white",
        "flex min-w-[20.4375rem] flex-col items-center rounded-[0.625rem] px-[1.81rem] py-[1.94rem] shadow-[0_20px_40px_0_rgba(212,210,244,0.50)] lg:px-[1.94rem] first:lg:rounded-r-none last:lg:rounded-l-none xl:min-w-[21.875rem]",
      )}
    >
      <h2
        className={cn(
          plan === "Professional" ? "" : "text-grayish-blue",
          " text-lg leading-7",
        )}
      >
        {plan}
      </h2>

      <p className="mb-8 mt-6 flex items-center gap-2 text-[4.5rem] leading-[4.4375rem] -tracking-[0.135rem]">
        <span className="text-[2.5rem] -tracking-[0.075rem]">$</span>
        <span>{price}</span>
      </p>
      <div
        className={cn(
          plan === "Professional" ? "" : "text-grayish-blue",
          "w-full",
        )}
      >
        <p className="plan-option">{storage} Storage</p>
        <p className="plan-option">{userNumbers} Users Allowed</p>
        <p className="plan-option">Send up to {bandwidth}</p>
      </div>
      <a
        href={link}
        className={cn(
          plan === "Professional"
            ? "text-blue bg-white"
            : "bg-custom-gradient text-white",
          "mt-8 flex w-full justify-center rounded-[0.375rem] py-3 text-[0.8125rem] uppercase tracking-[0.08706rem]",
        )}
        aria-label={`learn more about ${plan} plan`}
      >
        Learn More
      </a>
    </div>
  )
}

export default PlanItem
