import { render, screen, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import Catalog from "..";
import history from 'util/history';

test('should render Catalog with products', async () => {

    const text = "Fazer login";

    render(
        <Router history={history}>
            <Catalog />
        </Router>
    );

    expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('Smart TV')).toBeInTheDocument();
    });

});