import React from 'react';
import styles from '../styles/Pricing.module.css';
import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine, RightLine } from './design/Pricing';

const Pricing = () => {
  return (
    <Section className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
        <div className={styles.pricingContainer}>
          <img
            src={smallSphere}
            className='relative z-1'
            alt=''
            width={255}
            height={255}
          />
          <div className='absolute top-1/2 left-1/2 w-[60rem] pointer-events-none  -translate-x-1/2 -translate-y-1/2'>
            <img
              src={stars}
              alt=''
              className='w-full'
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag='Get Started with Brainwave'
          title='Pay once, user forever'
        />
        <div className='relative'>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className='flex justify-center mt-10'>
          <a
            className='text-xs font-code font-bold tracking-wider uppercase 
            border-b
            '
            href='/pricing'
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
