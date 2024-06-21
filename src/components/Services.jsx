import Heading from './Heading';
import Section from './Section';
import styles from '../styles/Services.module.css';
import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import Generating from './Generating';
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from './design/Services';
const Services = () => {
  return (
    <Section id='how to use'>
      <div className='container'>
        <Heading
          title='Generative AI made for creators'
          text='Brainwave unlockls the potential of AI-powered applications'
        />
        <div className='relative   '>
          <div className={styles.servicesContent}>
            <div className={styles.servicesImage}>
              <img
                className='w-full  h-full object-cover md:object-right'
                src={service1}
                alt=''
                width={800}
                height={730}
              />
            </div>
            <div className={styles.servicesTextWrapper}>
              <h4 className='h4 mb-4'>Smartest AI</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className='body-2'>
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start py-4 border-t border-n-6'
                  >
                    <img width={24} height={24} src={check} />
                    <p className='ml-4'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className='absolute right-4 left-4 bottom-4 border
             border-n-1/1 lg:left-1/2 lg:right-auto lg:bottom-8
             lg:-translate-x-1/2'
            />
          </div>

          <div className={styles.servicesGridContainer}>
            <div className={styles.servicesdGridContent}>
              <div className={styles.servicesGridImage}>
                <img
                  src={service2}
                  className='w-full h-full object-cover'
                  alt=''
                  width={630}
                  height={750}
                />
              </div>
              <div
                className={`${styles.servicesGridTextWrapper} bg-gradient-to-b from-n-8/10 to-n-8/90`}
              >
                <h4 className='h4 mb-4'>Photo Editing</h4>
                <p className='body-2 mb-[3rem] text-n-3'>
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing featuree. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className={styles.servicesGridContentTwo}>
              <div className={styles.servicesGridContentTwoTextWrapper}>
                <h4 className='h4 mb-4'>Video Generation</h4>
                <p className='body-2 mb-[2rem] text-n-3'>
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>
                <ul className='flex items-center justify-between'>
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]'
                          : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'
                      }`}
                    >
                      <div
                        className={` ${
                          index === 2 ? styles.servicesIconWrapper : ''
                        }`}
                      >
                        <img src={item} alt='' width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.servicesGridContentTwoImageWrapper}>
                <img
                  src={service3}
                  alt=''
                  className='w-full h-full object-cover '
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
