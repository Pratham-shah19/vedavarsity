import { ContactSection } from '@/src/components/contact/contact-section';
import ContactInfo from 'components/contact/ContactInfo';
import Location from 'components/contact/Location';

export const metadata = {
  description:
    'Get in touch with our team for any questions or inquiries regarding our online courses. Start your journey of spiritual discovery today!'
};
export default function Contact() {
  return (
    <>
      <ContactSection />
      <Location />
    </>
  );
}
