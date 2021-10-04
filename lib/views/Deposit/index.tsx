import React from 'react'

import { BackToV3Banner } from 'lib/components/BackToV3Banner'
import { DepositCard } from 'lib/views/Deposit/DepositCard'
import { PrizeBreakdownCard } from 'lib/views/Deposit/PrizeBreakdownCard'
import { PagePadding } from 'lib/components/Layout/PagePadding'

export const DepositUI = () => {
  return (
    <PagePadding className='flex flex-col space-y-4'>
      {/* <UpcomingPrizeCard /> */}
      <DepositCard />
      <BackToV3Banner />
      <PrizeBreakdownCard />
    </PagePadding>
  )
}
