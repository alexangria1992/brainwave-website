import Section from './Section';
import styles from '../styles/Collaboration.module.css';
import { collabApps, collabContent, collabText } from '../constants';
import { brainwaveSymbol, check } from '../assets';
import Button from './Button';
import { LeftCurve, RightCurve } from './design/Collaboration';

const Collaboration = () => {
  return (
    <Section crosses>
      <div className='container lg:flex'>
        <div className={styles.collaborationContainer}>
          <h2 className='h2 mb-4 md:mb-8'>
            AI Chat App for seamless collaboration
          </h2>
          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item) => (
              <li className='mb-3 py-3' key={item.id}>
                <div className={styles.collaborationContent}>
                  <img src={check} width={24} height={24} alt='check' />
                  <h6 className='body-2 ml-5'>{item.title}</h6>
                </div>
                {item.text && (
                  <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className={styles.collabTextWrapper}>
          <p className='body-2 bg-n-8    mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto mt-4'>
            {collabText}
          </p>
          <div className={styles.collaborationCircle}>
            <div className={styles.collaborationInnerCircle}>
              <div className={styles.collaborationCircleThree}>
                <div className={styles.collaborationCircleImage}>
                  <img src={brainwaveSymbol} height={48} width={48} alt='' />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 
                -ml-[1.6rem] origin-bottom rotate-${index * 45}  `}
                >
                  <div
                    className={`${styles.collaborationIconImage} -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      className='m-auto'
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
