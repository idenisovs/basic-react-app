import objectBased from './objectBased';
import arrayBased from './arrayBased';

export default function makeLinkedList(anomaliesRawData, isArrayBased = false) {
  if (isArrayBased) {
    return arrayBased(anomaliesRawData)
  } else {
    return objectBased(anomaliesRawData);
  }
}