/**
 * @file Filter panel label tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterPanelLabel from '../FilterPanelLabel';

describe('FilterPanelLabel', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <FilterPanelLabel>custom label</FilterPanelLabel>
    );
    expect(getByText(/custom label/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanelLabel>
        <span data-testid="node-label" />
      </FilterPanelLabel>
    );
    expect(getByTestId('node-label')).toBeVisible();
  });

  it('renders with count', () => {
    const { container } = render(<FilterPanelLabel count={10} />);
    expect(container).toHaveTextContent('10');
  });

  it('renders with a 0 count', () => {
    const { container } = render(<FilterPanelLabel count={0} />);
    expect(container).toHaveTextContent('0');
  });

  it('adds custom count label', () => {
    const { getByLabelText } = render(
      <FilterPanelLabel count={100} countLabel={count => `${count} chickens`} />
    );
    expect(getByLabelText(/\(100 chickens\)/i)).toHaveTextContent('100');
  });

  it('adds custom class name', () => {
    const { container } = render(<FilterPanelLabel className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('adds custom count class name', () => {
    const { container } = render(
      <FilterPanelLabel countClassName="custom-class" count={10} />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
