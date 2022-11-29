import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Langage from '../components/Langage';

import projectArray from '../json/projets.json';

export default function Realisations() {
    let dataLength = projectArray.length;

    const [prev, setPrev] = useState(dataLength - 1);
    const [item, setItem] = useState(0);
    const [next, setNext] = useState(1);

    const [project, setProject] = useState({
        title: '',
        description: '',
        langages: [],
        github: '',
    });

    useEffect(() => {
        setProject(projectArray.find((x) => x.id === item));
    }, [item]);

    const onNext = () => {
        prev === dataLength - 1 ? setPrev(0) : setPrev(prev + 1);
        item === dataLength - 1 ? setItem(0) : setItem(item + 1);
        next === dataLength - 1 ? setNext(0) : setNext(next + 1);
    };

    const OnPrevious = () => {
        prev === 0 ? setPrev(dataLength - 1) : setPrev(prev - 1);
        item === 0 ? setItem(dataLength - 1) : setItem(item - 1);
        next === 0 ? setNext(dataLength - 1) : setNext(next - 1);
    };

    const folder = '/assets/projet';
    const extension = '.png';
    let previousImage = folder + (prev + 1) + extension;
    let currentImage = folder + (item + 1) + extension;
    let nextImage = folder + (next + 1) + extension;

    return (
        <>
            <Head>
                <title>AD - Réalisations</title>
                <meta
                    name='description'
                    content='Mes réalisations.'
                />
            </Head>

            <div className='carousel'>
                <div
                    onClick={OnPrevious}
                    className='carousel__other'
                >
                    <Image
                        src={previousImage}
                        alt=''
                        fill='true'
                        sizes='300px'
                        className='carousel__image'
                    />
                    <span className='carousel__icon'>&lt;</span>
                </div>

                <div className='carousel__current'>
                    <Image
                        src={currentImage}
                        alt={project.title}
                        fill='true'
                        sizes='600px'
                        className='carousel__image'
                    />
                    <h2 className='carousel__title'>{project.title}</h2>
                </div>
                <div
                    onClick={onNext}
                    className='carousel__other'
                >
                    <Image
                        src={nextImage}
                        alt=''
                        fill='true'
                        sizes='300px'
                        className='carousel__image'
                    />
                    <span className='carousel__icon'>&gt;</span>
                </div>
            </div>

            <div className='projet'>
                <Langage langages={project.langages} />
                <p className='projet__description'>{project.description}</p>
                <a
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                    className='projet__link'
                >
                    Voir le code source
                </a>
            </div>
        </>
    );
}
