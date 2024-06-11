import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageMessage() {
  return (
    <div className="container text--center margin-top--xl">
      <h1>Site is under construction👷‍♂️🚧</h1>
      <p>We are working hard to give you a better experience.</p>
      <div className={styles.buttons}>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Go to Docs
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageMessage />
      </main>
    </Layout>
  );
}
