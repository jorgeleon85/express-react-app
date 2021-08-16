import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export const AnimalTable = ({
  data,
  isLoading,
  hasError,
  onUpdate,
  onDelete,
}) => {
  if (isLoading) {
    return <div>Data is loading...</div>;
  }
  if (hasError) {
    return <div className="errorMessage">{hasError}</div>;
  }
  return (
    <div className="Table">
      <TableHeader />
      <div className="TableContent">
        {data.map((item) => (
          <TableRow
            key={item.id}
            data={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
