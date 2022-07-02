import axios from 'axios';

const getCoins = async () => {
  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d'
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getCoins };
