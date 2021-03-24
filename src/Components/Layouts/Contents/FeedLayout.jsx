import React from 'react'
import SeekerFeed from '../../Chunks/SeekerFeed'
import ProviderFeed from '../../Chunks/ProviderFeed'
import { seekerDummy } from '../../App/seekerDummy'
import { providerDummy } from '../../App/providerDummy'

const FeedLayout = ({ userType }) => {
  return (
    <div className='w-full h-auto'>
      {userType === 'provider' ? (
        seekerDummy.map((seeker) => <ProviderFeed {...seeker} />)
      ) : (
        providerDummy.map(provider => <SeekerFeed {...provider} />)
      )}
    </div>
  )
}

export default FeedLayout
