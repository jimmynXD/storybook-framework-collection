import { PageLayout, Tile } from '@mskcc/components-react'
import { PageSetup } from '~/components'

export default function SubPage() {
  return (
    <PageSetup title='Subpage'>
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
    </PageSetup>
  )
}
