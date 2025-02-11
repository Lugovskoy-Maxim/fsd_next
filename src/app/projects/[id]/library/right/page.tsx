export default function Index({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Права в проекте {params.id}</h1>
    </div>
  );
}