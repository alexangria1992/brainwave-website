import { check } from '../assets';
import { pricing } from '../constants';
import styles from '../styles/PricingList.module.css';
import Button from './Button';

const PricingList = () => {
  return (
    <div className={styles.pricingListContainer}>
      {pricing.map((item) => (
        <div
          key={item.id}
          className='w-[19rem] max-lg:w-full h-full px-6 bg-n8 border border-n-6 
          rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 
          [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3
          '
        >
          <h4 className='h4 mb-4'>{item.title}</h4>
          <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>
            {item.description}
          </p>
          <div className={styles.pricingListPriceWrapper}>
            {item.price && (
              <>
                <div className='h3'>$</div>
                <di className='text-[5.5rem] leading-none font-bold'>
                  {item.price}
                </di>
              </>
            )}
          </div>
          <Button
            className='w-full mb-6'
            href={
              item.price ? '/pricing' : 'mailto:contact@alex040892@gmail.com'
            }
            white={!!item.price}
          >
            {item.price ? 'Get Started' : 'Contact Us'}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index} className='flex items-start py-5 border-n-6'>
                <img src={check} width={24} height={24} alt='' />
                <p className='body-2 ml-4'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
