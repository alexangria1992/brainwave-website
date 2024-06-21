import Section from './Section';
import styles from '../styles/Benefits.module.css';
import Heading from './Heading';
import { benefits } from '../constants';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

const Benefits = () => {
  return (
    <Section id='features'>
      <div className={`${styles.benefitsContainer} container`}>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Chat Smarter, Not Harder with Brainwave'
        />
        <div className={styles.benefitsWrapper}>
          {benefits.map((item) => (
            <div
              key={item.id}
              className={styles.benefitsCard}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className={styles.benefitsTitle}>
                <h5 className='h5 mb-5'>{item.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{item.text}</p>
                <div className={styles.benefitsCardImage}>
                  <img src={item.iconUrl} alt='' width={48} height={48} />
                  <p
                    className='ml-auto font-code text-xs font-bold 
                  text-n-1 uppercase tracking-wider  '
                  >
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}
              <div
                style={{ clipPath: 'url(#benefits)' }}
                className={`${styles.benefitsCardAnimation} bg-n-8 `}
              >
                <div
                  className={`${styles.benefitsCardMainImage} transition-opacity`}
                >
                  {item.imageUrl && (
                    <img
                      className='w-full h-full object-cover'
                      src={item.imageUrl}
                      width={380}
                      height={362}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
