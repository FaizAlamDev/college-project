const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map((_, key) => (
    <div key={key} className="animate-pulse">
      <div className="h-72 rounded-lg bg-gray-300"></div>
    </div>
  ));
};

export default Skeleton;
