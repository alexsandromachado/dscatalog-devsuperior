import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

test('should render ProductPrice', () => {

    const price = 12.3;

    render(
        <ProductPrice price={price} />
    );

    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("12,30")).toBeInTheDocument();

});