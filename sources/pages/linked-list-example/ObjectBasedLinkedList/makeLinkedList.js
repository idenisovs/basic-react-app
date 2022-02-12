export default function makeLinkedList(anomaliesRawData) {
  return makeNode(anomaliesRawData);
}

function makeNode(anomalies, prevNode = null) {
    const node = {
      prev: null,
      currentItem: {},
      next: null
    };

  if (anomalies.items) {
    node.currentItem = {
      items: anomalies.items,
      rate: anomalies.rate
    };
  }

  if (prevNode) {
    node.prev = prevNode;
  }

  if (anomalies.others) {
    node.next = makeNode(anomalies.others, node);
  }

  return node;
}