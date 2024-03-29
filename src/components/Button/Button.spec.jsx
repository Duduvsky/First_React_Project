/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.';

describe('<Button />', () => {
    it('Should render the button with the text "Load more"', () => {
        render(<Button text="Load more" />);

        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeInTheDocument();
    });
    it('Should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', {name: /load more/i});

        userEvent.click(button);
        // fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });
    it('Should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />);
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeDisabled();
    });
    it('Should be enable when disabled is false', () => {
        render(<Button text="Load more" disabled={false} />);
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeEnabled();
    });
    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<Button text="Load more" disabled={false} onClick={fn} />);
        expect(container.firstChild).toMatchSnapshot();
      });
});