import { PageLayout, Tile, Tooltip, Button } from '@mskcc/components-react'
import { PageSetup } from '~/components'

export default function IndexPage() {
  return (
    <PageSetup title='Index'>
      <PageLayout layout='sarge'>
        <div className='msk-next-components'>
          <Tile>
            <div className='msk-next-tile-content'>
              <div>
                <span className='msk-next-tooltip-label'>
                  Index Page
                  <span className='msk-next-tooltip'>
                    <Tooltip>We are using NextJS 13 with pages</Tooltip>
                  </span>
                </span>
              </div>
              <div>
                <Button onClick={() => alert('Button Pressed')}>
                  Click me
                </Button>
              </div>
            </div>
          </Tile>
        </div>
      </PageLayout>
    </PageSetup>
  )
}
