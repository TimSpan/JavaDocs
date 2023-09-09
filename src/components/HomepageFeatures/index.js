import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Magic of Beginnings',
    Svg: require('@site/static/img/dx_1.svg').default,
    description: (
      <>
        Every new beginning comes from some other beginning's end
      </>
    ),
  },
  {
    title: 'Beyond the Horizon',
    Svg: require('@site/static/img/dx_2.svg').default,
    description: (
      <>
        Don't be afraid to go where you've never been, for beyond the horizon lies a world of endless possibilities
      </>
    ),
  },
  {
    title: 'The Symphony of Silence',
    Svg: require('@site/static/img/dx_3.svg').default,
    description: (
      <>
        In the midst of chaos, find solace in the symphony of silence.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        {/* <img src={java_1} alt="" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
