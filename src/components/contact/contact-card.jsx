export function ContactCard({
  icon: Icon,
  title,
  subtitle,
  contact,
  isLink = false
}) {
  const ContactText = isLink ? 'a' : 'p'
  const linkProps = isLink
    ? {
        href: title === 'Email' ? `mailto:${contact}` : `tel:${contact}`,
        className: 'hover:underline',
      }
    : {}

  return (
    (<div className="flex flex-col items-center text-center">
      <div
        className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <Icon className="w-10 h-10 text-blue-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{subtitle}</p>
      <ContactText
        className="text-gray-800 font-semibold whitespace-pre-line"
        {...linkProps}>
        {contact}
      </ContactText>
    </div>)
  );
}

