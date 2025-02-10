export const GPS_Key = 'AIzaSyDBFrO-qgYIYTKvAF3MQa3ofoM_fY3YetE';

export const storeLocation = {
  storeAddress: 'Rua João Bim, 1299, Ribeirão Preto - SP, Brasil',
};

export const DISTANCE_MATRIX_KEY =
  '3viTG69eJ4I2ZWxwlZwmMgxg6wDiReo78Oy96XWjXpz9tx9ePXwKyOFM7zoJDPFU';

export async function getDistance(userAddress, storeAddress) {
  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(
    userAddress,
  )}&destinations=${encodeURIComponent(storeAddress)}&key=${DISTANCE_MATRIX_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Erro na API DistanceMatrix:', data.error_message);
      return null;
    }

    return data.rows[0].elements[0];
  } catch (error) {
    console.error('Erro ao buscar distância:', error);
    return null;
  }
}
