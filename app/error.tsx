"use client"
import { useEffect } from 'react';
import styles from './layout.module.css';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
