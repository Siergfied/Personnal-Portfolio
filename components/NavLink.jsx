import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navlink({ href, className, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? ' active' : ''}`}
        >
            {text}
        </Link>
    );
}
