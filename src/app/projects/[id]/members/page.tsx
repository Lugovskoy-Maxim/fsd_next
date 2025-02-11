export default function Index({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Участники проекта {params.id}</h1>
    </div>
  );
}