import * as React from 'react'
import '@mskcc/icons/dist/msk-icon.css'
import '@mskcc/fundamentals/css/gotham-all.css'
import './banner.css'

export interface BannerProps {
  /**
   * The content of the button
   */
  children: React.ReactNode
}

export function Banner(props: BannerProps) {
  return (
    <div className='msk--banner'>
      <div className='msk--banner-wrapper'>
        {props.children ?? (
          <div>
            <span className='msk--emphasis'>
              Ready to start planning your care?
            </span>{' '}
            Call us at{' '}
            <span className='msk--emphasis underline'>833-347-1665</span> to
            make an appointment.
          </div>
        )}
        <button className='msk--banner-close'>
          <span className='msk-icon'>clear</span>
        </button>
      </div>
    </div>
  )
}
