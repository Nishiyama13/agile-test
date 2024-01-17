const apiAgileUrl = 'https://private-anon-0ab1076ae3-produto3.apiary-mock.com/api'

export async function fetchProductsData() {
    try {
        const response = await fetch(`${apiAgileUrl}/products`);
        const data = await response.json();
        return data;

    } catch(error) {
        console.log(error.message)
        return res.status(500).json({ error: 'Internal server error' });
    }
}
