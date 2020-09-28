import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// IRL we'd write more minute tests. For this exercise though,
// I've decided to just do a smoke test

test('Smoke Test', () => {
  render(<App />);
});
