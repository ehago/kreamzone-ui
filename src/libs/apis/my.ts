// import Axios from '@libs/axios';
import { IDropped } from './landing';

export interface ITradeDetail {
  name: string;
  [x: string]: string;
}

// 마이페이지 > 구매 내역
export const getBuyingTradeList = (): Promise<ITradeDetail[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { key: '203bjdkl123', name: '001' },
        { key: '203bjdkl124', name: '002' },
        { key: '203bjdkl122', name: '003' },
        { key: '203bjdkl1213', name: '004' },
        { key: '203bjdkl1212', name: '005' },
        { key: '203bjdkl13', name: '006' },
        { key: '203bjdkl113', name: '007' },
        { key: '203bjdkl13002', name: '008' },
        { key: '203bjdkl1988', name: '009' },
      ]);
    }, 1000);
  });
};

// 마이페이지 > 판매 내역
export const getSellingTradeList = (): Promise<ITradeDetail[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { key: '203bjdkl123', name: '001' },
        { key: '203bjdkl124', name: '002' },
        { key: '203bjdkl122', name: '003' },
        { key: '203bjdkl1213', name: '004' },
        { key: '203bjdkl1212', name: '005' },
        { key: '203bjdkl13', name: '006' },
        { key: '203bjdkl113', name: '007' },
        { key: '203bjdkl13002', name: '008' },
        { key: '203bjdkl1988', name: '009' },
      ]);
    }, 1000);
  });
};

// 마이페이지 > 관심 내역
export const getWishList = (): Promise<IDropped[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          brand: {
            name: 'NIKE',
            image:
              'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
            background: '#5832ea',
          },
          eng_name: 'Adidas Yeezy 500 Enflame',
          image:
            'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
          immediately_purchase_price: 250000,
          item_id: 101,
        },
        {
          brand: {
            name: 'NIKE',
            image:
              'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
            background: '#5832ea',
          },
          eng_name: 'Adidas Yeezy 500 Enflame',
          image:
            'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
          immediately_purchase_price: 180000,
          item_id: 102,
        },
        {
          brand: {
            name: 'NIKE',
            image:
              'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
            background: '#5832ea',
          },
          eng_name: 'Adidas Yeezy 500 Enflame',
          image:
            'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
          immediately_purchase_price: 1103000,
          item_id: 103,
        },
        {
          brand: {
            name: 'NIKE',
            image:
              'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
            background: '#5832ea',
          },
          eng_name: 'Adidas Yeezy 500 Enflame',
          image:
            'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
          immediately_purchase_price: 99800,
          item_id: 104,
        },
        {
          brand: {
            name: 'NIKE',
            image:
              'https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png',
            background: '#5832ea',
          },
          eng_name: 'Adidas Yeezy 500 Enflame',
          image:
            'https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m',
          immediately_purchase_price: 25000,
          item_id: 105,
        },
      ]);
    }, 1000);
  });
};
