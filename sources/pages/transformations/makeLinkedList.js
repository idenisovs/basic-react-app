export default function makeLinkedList(anomaliesRawData) {
  return makeNode(anomaliesRawData);
}

function makeNode(anomalies, prevNode = null) {
    const node = {
      prev: null,
      items: [],
      rate: 0,
      next: null
    };

  if (anomalies.items) {
    node.items = anomalies.items;
    node.rate = anomalies.rate;
  }

  if (prevNode) {
    node.prev = prevNode;
  }

  if (anomalies.others) {
    node.next = makeNode(anomalies.others, node);
  }

  return node;
}