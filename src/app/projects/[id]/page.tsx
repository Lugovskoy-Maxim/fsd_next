export default function Index({params}: {params: {id: string}}){
  return (
    <div>
      <h1>Проект {params.id}</h1>
    </div>
  );
}