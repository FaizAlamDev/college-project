const Results = ({ results }) => {
  return (
    <div className="m-5 p-5 border-b-slate-500">
      {results.map((result) => (
        <div key={result.id} className="w-full h-20 border-red-500">
          <h4>{result.title}</h4>
          <p>{result.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
