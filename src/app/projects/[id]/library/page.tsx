export default function Index({params}: {params: {id: string}}){
  return (
    <div>
      <h1> Права и роли в проекте {params.id}</h1>
    </div>
  );
}