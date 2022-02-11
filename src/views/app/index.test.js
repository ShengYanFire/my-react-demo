/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-19 11:06:50
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-20 15:17:23
 */
import { render, screen } from '@testing-library/react';
import App from '@/views/app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
