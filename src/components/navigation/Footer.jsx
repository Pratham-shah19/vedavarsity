import { OutLink, InLink } from '../shared/Links';
import { footerLinks } from 'data/footerLinks';
import { Social } from './Social';
import Logo from '../shared/Logo';
import AppsLink from 'components/shared/AppsLink';
const Footer = () => {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-4">
          <div className="w-fit py-3">
            <Logo isBlack={false} />
            <OutLink
              href="https://rzp.io/l/KzOI5A3"
              className="mt-4 block rounded-lg bg-white py-2 text-center font-bold text-primary hover:bg-blue-100">
              Donate
            </OutLink>
          </div>

          {footerLinks.map((each) => (
            <div key={each.label}>
              <p className="font-medium text-white">{each.label}</p>
              {each.subLinks.map((sub) => (
                <InLink
                  href={sub.link}
                  key={sub.label}
                  className="mt-4 flex flex-col space-y-2 text-sm text-slate-300 hover:text-blue-600">
                  {sub.label}
                </InLink>
              ))}
            </div>
          ))}

          <div>
            <p className="font-medium text-white">SOCIAL</p>
            <Social className="mt-4 flex space-x-4" />
          </div>

          <div className="justify-self-auto lg:justify-self-end">
            <p className="font-medium text-white">LEARNER APP</p>
            <div className="mt-4">
              <AppsLink column={true} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
