import { socials } from '../constants';
import Section from './Section';

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='caption text-n4 lg:block'>
          {new Date().getFullYear()}. All Rights Reserved
        </p>

        <ul className='flex gap-5 flex-wrap'>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target='_blank'
              className='flex items-center justify-center w-10 h-10 
              bg-n-7 rounded-full transition-colors hover:bg-n-6'
            >
              <img src={item.iconUrl} width={16} height={16} alt='' />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
