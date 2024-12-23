import TypingAnimation from '@/components/ui/typing-animation';
import Button from '../shared/Buttons';
import BlurIn from '@/components/ui/blur-in';
import { CoolMode } from '@/components/ui/cool-mode';
import { RainbowButton } from '@/components/ui/rainbow-button';

const WelcomeSection = () => {
  return (
    <section className="m-auto max-w-6xl px-4">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <div className="mb-3 text-4xl font-bold leading-tight text-black dark:text-white">
            <BlurIn
              word={'Welcome to the'}
              className="text-left text-4xl font-bold text-black dark:text-white"
            />
            <BlurIn
              word={'World of Knowledge'}
              className="text-left text-4xl font-bold text-black dark:text-white"
            />
          </div>

          <TypingAnimation
            className="text-1xl  text-left text-gray-400 dark:text-white"
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
            duration={20}
          />

          <CoolMode>
            <Button
              href={'/live-courses'}
              className="mt-4 rounded bg-black px-6 py-2 text-white transition duration-300 hover:bg-gray-800">
              Start free trial
            </Button>
          </CoolMode>
        </div>

        <div className="flex justify-end  md:w-1/2">
          <img src="/inss-logo.png" alt="INSS Logo" className="w-120 md:w-120 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
