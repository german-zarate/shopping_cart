import { render } from '@testing-library/react';
import Products from './products';

const mockProducts = [{
    "id": 1,
    "name": "Face Masks",
    "price": 2.5,
    "unit": null,
    "image": ""
},
{
    "id": 2,
    "name": "Toilet Paper",
    "price": 0.65,
    "unit": "roll",
    "image": ""
}];

test('render shopping cart correctly', () => {
    const dom = render(
        <Products 
            products={mockProducts}
            addProductToCart={() => {}}
        />
    );
    expect(dom.getByTestId("products")).toBeInTheDocument();
});

test('show product item correctly', () => {
    const dom = render(
        <Products 
            products={mockProducts}
            addProductToCart={() => {}}
        />
    );
    // get product item with product ID = 1 (i.e. Face Masks)
    const faceMaskItem = dom.getByTestId('product-1');
    expect(faceMaskItem).toBeInTheDocument();
});

test('show product item name correctly', () => {
    const dom = render(
        <Products 
            products={mockProducts}
            addProductToCart={() => {}}
        />
    );
    // get product item with product ID = 1 (i.e. Face Masks)
    const faceMaskItem = dom.getByTestId('product-name-1');
    expect(faceMaskItem).toHaveTextContent("Face Masks");
});

test('show product item price correctly', () => {
    const dom = render(
        <Products 
            products={mockProducts}
            addProductToCart={() => {}}
        />
    );
    // get product item with product ID = 1 (i.e. Face Masks)
    const faceMaskItem = dom.getByTestId('product-price-1');
    expect(faceMaskItem).toHaveTextContent("£2.50");
});

test('click add to cart button trigger function correctly', () => {
    const mockFn = jest.fn();
    const dom = render(
        <Products 
            products={mockProducts}
            addProductToCart={mockFn}
        />
    );
    dom.getByTestId("add-button-1").click();
    expect(mockFn).toHaveBeenCalledTimes(1);
});