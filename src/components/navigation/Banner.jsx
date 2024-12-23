import { DonateButton } from 'components/shared/Buttons';
import { IconLink } from 'components/shared/Links';
import { isckonEmail, isckonPhone } from 'data/contact';
import { MdEmail, MdCall } from 'react-icons/md';
import { Social } from './Social';
import { socialLinks } from 'data/social';

const Banner = () => {
  return (
    <nav className="bg-navy">
      <div className="m-auto flex h-10 max-w-6xl items-center justify-between  px-4 md:h-[60px]">
        <ul className="flex space-x-6 lg:space-x-10">
          <IconLink href={`mailto:${isckonEmail}`} icon={<MdEmail />}>
            {isckonEmail}
          </IconLink>
          <IconLink href={`tel:${isckonPhone}`} icon={<MdCall />}>
            {isckonPhone}
          </IconLink>
          <IconLink viewInMob={true} href={`${socialLinks[1].link}`} icon={socialLinks[1].icon}>
            {socialLinks[1].label}
          </IconLink>
        </ul>
        <div className="flex items-center space-x-10">
          <Social className="hidden space-x-10 lg:flex"></Social>
          {/* <DonateButton /> */}
        </div>
      </div>
    </nav>
  );
};

export default Banner;