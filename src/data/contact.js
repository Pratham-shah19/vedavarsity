import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

export const isckonEmail = 'info@iskconbm.org';
export const isckonPhone = '+91 95280 06565';

export const contacts = [
  {
    icon: <ImLocation2 size={32} className="text-primary" />,
    title: 'Postal Address:',
    content:
      ' 344, Shri Radha Golf, Aanyor, Bari Parikrama Marg, Govardhan, Mathura, Uttar Pradesh 281502, India.'
  },
  {
    icon: <MdEmail size={32} className="text-primary" />,
    title: 'Email:',
    content: isckonEmail
  },
  {
    icon: <RiWhatsappFill size={32} className="text-primary" />,
    title: 'Contact:',
    content: isckonPhone
  }
];
