export interface IProduct {
  id: number;
  productImage: string;
  desc: string;
  brand: string;
  brandImage: string;
  name: string;
  price: string;
}

const products: IProduct[] = [
  {
    id: 1,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 2,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 3,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 4,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 5,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 6,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 7,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 8,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
  {
    id: 9,
    productImage:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
    desc: '아디다스 이지 500 인플레임',
    brand: 'NIKE',
    brandImage:
      'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
    name: 'Adidas Yeezy 500 Enflame',
    price: '250,000',
  },
];

export default products;
