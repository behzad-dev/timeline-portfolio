'use client';

export default function SentryTestPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Sentry test</h1>
      <button
        onClick={() => {
          throw new Error('Sentry test error (client)');
        }}
      >
        Throw error
      </button>
    </main>
  );
}
