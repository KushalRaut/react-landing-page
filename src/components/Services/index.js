import React from 'react'
import Icon1 from '../../images/choose.svg'
import Icon2 from '../../images/code-review.svg'
import Icon3 from '../../images/ether.svg'

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We Help Reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virutal Offices</ServicesH2>
            <ServicesP>
              We Help Reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benifits</ServicesH2>
            <ServicesP>
              We Help Reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
