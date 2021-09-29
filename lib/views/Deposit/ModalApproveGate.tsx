import { Transaction } from '@pooltogether/hooks'
import {
  formatBlockExplorerTxUrl,
  SquareButton,
  SquareButtonTheme,
  ThemedClipSpinner
} from '@pooltogether/react-components'
import { PrizePool } from '@pooltogether/v4-js-client'
import classNames from 'classnames'
import { InfoList } from 'lib/components/InfoList'
import { EstimatedApproveDepositsGasItem } from 'lib/components/InfoList/EstimatedGasItem'
import { useChainNativeCurrency } from 'lib/hooks/useChainNativeCurrency'
import React from 'react'

interface ModalApproveGateProps {
  className?: string
  prizePool: PrizePool
  chainId: number
  approveTx: Transaction
  sendApproveTx: () => void
}

export const ModalApproveGate = (props: ModalApproveGateProps) => {
  const { prizePool, className, chainId, approveTx, sendApproveTx } = props

  if (approveTx?.inFlight) {
    const blockExplorerUrl = formatBlockExplorerTxUrl(approveTx, chainId)

    return (
      <div className={classNames(className, 'flex flex-col text-accent-1')}>
        <ThemedClipSpinner className='mx-auto mb-8' sizeClassName='w-10 h-10' />
        <p className='mb-4 text-accent-1 text-center mx-8'>
          Once your approval transaction has finished successfully you can deposit.
        </p>
        <a
          className='w-full mt-6'
          target='_blank'
          rel='noopener noreferrer'
          href={blockExplorerUrl}
        >
          <SquareButton className='w-full' theme={SquareButtonTheme.purpleOutline}>
            View on Explorer
          </SquareButton>
        </a>
      </div>
    )
  }

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <div className='mx-4 text-accent-1'>
        <p className='mb-4'>
          PoolTogether's Prize Pool contracts require you to send an approval transaction before
          depositing.
        </p>
        <p className='mb-4'>This is once per network.</p>
        <p className='mb-10'>
          For more info on approvals see <a className='underline'>here</a>.
        </p>
      </div>
      <InfoList className='mb-6'>
        <EstimatedApproveDepositsGasItem prizePool={prizePool} />
      </InfoList>
      <SquareButton className='w-full' onClick={sendApproveTx}>
        Confirm approval
      </SquareButton>
    </div>
  )
}