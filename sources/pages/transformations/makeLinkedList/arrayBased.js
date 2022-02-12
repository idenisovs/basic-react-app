import LinkedList from './LinkedList';

export default function arrayBased(anomaliesRawData) {
  const anomaliesArray = []

  transformToArray(anomaliesRawData, anomaliesArray);

  return new LinkedList(anomaliesArray);
}

function transformToArray(anomaliesRawData, result) {
  const node = {
    rate: anomaliesRawData.rate,
    items: anomaliesRawData.items
  };

  result.push(node);

  const { others } = anomaliesRawData;

  if (others) {
    transformToArray(others, result);
  }
}