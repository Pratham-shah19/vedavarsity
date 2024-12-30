import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';

export function ContactSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
          <ContactCard
            icon={Mail}
            title="Email"
            subtitle="Our friendly team is here to help."
            contact="hi@user.com"
            isLink={true}
          />
          <ContactCard
            icon={MapPin}
            title="Office"
            subtitle="Come say hello at our office HQ."
            contact={`Lorem ipsum dolor\nsit amet, consectetur adipiscing elit.`}
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            subtitle="Mon-Fri from 8am to 7pm."
            contact="+1 (555) 000-0000"
            isLink={true}
          />
        </div>
      </div>
    </section>
  );
}
