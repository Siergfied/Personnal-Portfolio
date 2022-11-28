import Image from 'next/image';

export default function Langage(props) {
    const langages = props.langages;

    return (
        <ul className='langages__container'>
            {langages.map((langage) => (
                <li
                    key={langage}
                    className='langages'
                >
                    <Image
                        src={'/icon/' + langage + '.svg'}
                        alt={langage}
                        width={30}
                        height={30}
                    />
                </li>
            ))}
        </ul>
    );
}
