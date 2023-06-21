'use client'
import { PageLayout, Tile } from '@mskcc/components-react'

export default function Page() {
  return (
    <PageLayout layout='sarge'>
      <div className='msk-next-components'>
        <Tile>
          <div className='msk-next-tile-content'>
            <div>
              <span>Subpage</span>
            </div>
          </div>
        </Tile>
      </div>
    </PageLayout>
  )
}
