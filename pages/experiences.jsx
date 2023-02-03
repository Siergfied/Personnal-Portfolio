import Head from 'next/head';

import studiesArray from '../json/studies.json';
import jobsArray from '../json/jobs.json';

const jobs = jobsArray.reverse();
const studies = studiesArray.reverse();

export default function Experience() {
    return (
        <>
            <Head>
                <title>AD - Expériences</title>
                <meta
                    name='description'
                    content='Mes précédents emplois et formations.'
                />
            </Head>

            <div className='experiences'>
                <section className='section'>
                    <h2 className='section__title'>Formations</h2>
                    <ul className='section__content'>
                        {studies.map(({ id, formation, organisme, date }) => (
                            <li
                                key={id}
                                className='section__entry'
                            >
                                <h3>{formation}</h3>
                                <p>{organisme}</p>
                                <p>{date}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='section'>
                    <h2 className='section__title'>Emplois</h2>
                    <ul className='section__content'>
                        {jobs.map(
                            ({ id, entreprise, poste, date, mission }) => (
                                <li
                                    key={id}
                                    className='section__entry'
                                >
                                    <h3>{entreprise}</h3>
                                    <p>
                                        {poste} de {date}
                                    </p>
                                    <ul>
                                        {mission.map((entry) => (
                                            <li key={entry}>{entry}</li>
                                        ))}
                                    </ul>
                                </li>
                            )
                        )}
                    </ul>
                </section>
            </div>
        </>
    );
}
