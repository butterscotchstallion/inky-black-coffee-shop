import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddToCartButton from './AddToCartButton';

test('loads and displays add to cart button', async () => {
  // ARRANGE
  const item = {
    id: 1,
    name: 'Coffee',
    price: 0.99,
    description: 'hi',
    quantity: 1,
  };
  const user = userEvent.setup();
  render(<AddToCartButton item={item} />);

  // ACT
  await user.click(screen.getByText('Add to cart'));

  // ASSERT
  expect(screen.getByRole('button')).toBeTruthy();
});
