import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/inss-logo.png';

export function Logo() {
  return (
    <Link href="/" className="mb-6 flex items-center justify-center">
      <Image src={logo} alt="INSS Logo" width={180} height={90} priority />
    </Link>
  );
}
