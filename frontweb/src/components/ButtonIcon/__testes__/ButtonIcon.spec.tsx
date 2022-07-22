import { render, screen } from "@testing-library/react";
import ButtonIcon from "..";

test.only('ButtonIcon should render button with given text', () => {

    const text = "Fazer login";

    render(
        <ButtonIcon text={text} />
    );

    expect(screen.getByText(text)).toBeInTheDocument();

});