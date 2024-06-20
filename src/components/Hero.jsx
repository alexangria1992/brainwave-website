import Section from './Section';
import styles from '../styles/Hero.module.css';
import curve from '../assets/hero/curve.png';
import robot from '../assets/hero/robot.jpg';
import Button from './Button';
import heroBackground from '../assets/hero/hero-background.jpg';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogo from './CompanyLogo';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'
    >
      <div className={`${styles.heroContainer} container `} ref={parallaxRef}>
        <div className={styles.heroWrapper}>
          <h1 className='h1 mb-6  '>
            Explore the Possibilities of &nbsp;AI &nbsp; Chatting with {''}
            <span className={styles.heroSpan}>
              Brainwave
              <img
                src={curve}
                className={styles.heroUnderline}
                width={624}
                height={28}
                alt='Curve'
              />
            </span>
          </h1>
          <p className={`${styles.heroText}  body-1 max-w-3xl text-n-2 mb-24`}>
            Unleash the power of Ai within Brainwave. Upgrade your prdouctivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href='/pricing' white>
            Get started
          </Button>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={`${styles.heroImageWrapper} bg-conic-gradient`}>
            <div className={`${styles.heroImageRow} bg-n-8 `}>
              <div className={styles.heroLine} />
              <div className={`${styles.heroImage} `}>
                <img
                  src={robot}
                  className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]'
                  width={1024}
                  height={490}
                  alt='ai'
                />
                <Generating className={`${styles.heroGeneratingBox}`} />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className={styles.heroParallax}>
                    {heroIcons.map((icon, index) => (
                      <li className={styles.heroParallaxIcons} key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className='hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex'
                    title='Code generation'
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            <img
              src={heroBackground}
              className='w-full'
              width={1440}
              height={1800}
              alt='hero'
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className={styles.companyLogo} />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
