export default function Index({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Информация о проекте {params.id}</h1>
    </div>
  );
}