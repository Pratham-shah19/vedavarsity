import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/inss-logo.png';

export function Logo() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <Link href="/" className=" flex items-center justify-center">
        <Image src={logo} alt="INSS Logo" width={180} height={90} priority />
      </Link>
      <span className="text-center text-xs md:text-sm">
        Dedicated To <br />
        <b className="text-primary">His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda.</b>
      </span>
    </div>
  );
}
