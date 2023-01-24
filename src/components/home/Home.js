import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Link to="/books">Go, read some books</Link>
    </main>
  );
}
