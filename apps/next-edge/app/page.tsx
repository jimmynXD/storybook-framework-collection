'use client'
import { Button, PageLayout, Tile, Tooltip } from '@mskcc/components-react'

export default function Page() {
  return (
    <PageLayout layout='sarge'>
      <div className='msk-next-components'>
        <Tile>
          <div className='msk-next-tile-content'>
            <div>
              <span className='msk-next-tooltip-label'>
                Index Page
                <span className='msk-next-tooltip'>
                  <Tooltip>We are using NextJS 13 with app directory</Tooltip>
                </span>
              </span>
            </div>
            <div>
              <Button onClick={() => alert('Button Pressed')}>Click me</Button>
            </div>
          </div>
        </Tile>
      </div>
    </PageLayout>
  )
}
